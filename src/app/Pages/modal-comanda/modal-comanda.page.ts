import { Component, Input, OnInit } from '@angular/core';
import { PostsService } from '../../Services/posts.service';
import { Producto, IntComanda } from '../../Interfaces/Interface';
import { LocalService } from '../../Services/local.service';
import { ModalController, PopoverController } from '@ionic/angular';
import { VlidapassComponent } from '../../components/vlidapass/vlidapass.component';
import { FolioComponent} from '../../components/folio/folio.component';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
(<any>pdfMake).vfs = pdfFonts.pdfMake.vfs;
import { Printer, PrintOptions } from '@awesome-cordova-plugins/printer/ngx';
import { File } from '@awesome-cordova-plugins/file/ngx';

@Component({
  selector: 'app-modal-comanda',
  templateUrl: './modal-comanda.page.html',
  styleUrls: ['./modal-comanda.page.scss'],
})
export class ModalComandaPage implements OnInit {
  comandaPrint:any;
  @Input() Comanda: IntComanda={};
  pdfObject: any;
  productos: Producto[] = [];
  one_Producto:Producto={};
  productosfinales:Producto[]=[];
  constructor(private post: PostsService,
              private local: LocalService,
              private modalctrl: ModalController,
              private popctrl: PopoverController,
              private printer: Printer,
              private file: File) {
               }
  ngOnInit(): void {
    if(this.Comanda.productos!= undefined && this.Comanda.productos.length>=1){
      this.productosfinales.push(... this.Comanda.productos);
      }
  }

  onSearchChange(event){
    if(event.detail.value!=''&& event.detail.value.length>=3){
      const nom_cliente = event.detail.value;
      this.post.getproductos(nom_cliente,this.Comanda.token).subscribe(resp =>{
        if(resp.producto.length>=1){
          this.productos= resp.producto;
        }else{
          this.productos= [];
          this.local.presentAlert('No existen referencias de Productos');
        }
      });    
    }else{
      this.productos= [];
    }
  }
  async selectProducto(event){    
    this.one_Producto= event;
    this.one_Producto.costo= Number(this.one_Producto.costo);
    this.one_Producto.precio_publico= Number(this.one_Producto.precio_publico);
    this.one_Producto.precio_mayoreo= Number(this.one_Producto.precio_mayoreo);
    this.one_Producto.precio_menudeo= Number(this.one_Producto.precio_menudeo);
    this.one_Producto.precio_venta= Number(this.one_Producto.precio_venta);
    this.one_Producto.cantidad=1;
    this.productos=[];    
  }
  masmas(){
    this.one_Producto.cantidad++;
  }
  menosmenos(){
    this.one_Producto.cantidad--;
  }
  deleteuno(i: number){
    this.productosfinales.splice(i, 1);
    this.eltotal();
  }
  addproduct(){
    if(Number(this.one_Producto.existencia)>=Number(this.one_Producto.cantidad)){
    this.Comanda.tipo= this.one_Producto.tipo_venta;
    let sub=this.one_Producto.cantidad * Number(this.one_Producto.precio_venta);
    this.one_Producto.sub_total= Number(sub.toFixed(2));
    this.productosfinales.push(this.one_Producto);
    this.one_Producto={};
    this.eltotal();
    }else{
      this.local.presentAlert('Producto Insuficiente para la venta, tienes:'+ this.one_Producto.existencia)
    }
  }
  eltotal() {
    let sub=0;
    for(let uno of this.productosfinales){
      sub = sub+ uno.sub_total;
    }
    this.Comanda.Total= Number(sub.toFixed(2))
  }
  guardar(){
    this.Comanda.productos= this.productosfinales;
    this.modalctrl.dismiss({tipo:10,coma: this.Comanda});
  }
  async cancelar(){
    const pop= await this.popctrl.create({
    component: VlidapassComponent,
    backdropDismiss:false,
    cssClass:'pop-pass'
    });
    await pop.present();
    const {data}= await pop.onWillDismiss();
    if(data!= undefined){
      this.modalctrl.dismiss({tipo:20, coma: this.Comanda});
    }
  }
  async enviarComanda(){
    const fina={
      token : this.Comanda.token,
      cliente_id : this.Comanda.cliente_id,
      total : this.Comanda.Total,
      tipo : this.Comanda.tipo,
      venta_detalle : []
    };
    for(let one of this.productosfinales){
      const uno={
        producto_id : one.id,
        cantidad    : one.cantidad,
        precio_venta: one.precio_venta
      };
      fina.venta_detalle.push(uno);
    }
    await this.local.presentLoading('Cargando...');
    this.post.crearComanda(fina).subscribe(async resp =>{
      await this.local.detenerloadding();
      console.log(resp);
    
      if(resp.code==202){
        //this.local.presentAlert('Folio:'+ resp.folio);

        const pop = await this.popctrl.create({
          component: FolioComponent,
          backdropDismiss:false,
          cssClass:'pop-pass',
          componentProps:{
            'numeroFolio': resp.folio
          }
          });
          await pop.present();
          const {data}= await pop.onWillDismiss();
          if(data!= undefined){
            this.modalctrl.dismiss({tipo:20, coma: this.Comanda});
          }


        /*
        const dd = {
          pageSize: {
             width: 200,
             height: 250,
           },
          content: [
            {text:  `Folio: ${resp.folio}`, alignment: 'center',style: 'header'},
            { qr: `${resp.folio}`, fit: '150', alignment: 'center' },
          ],
          styles: {
            header: {
              fontSize: 19,
              bold: true
            },
            anotherStyle: {
              italics: true,
              alignment: 'right'
            }
          }
        };

        //Codigo original
        //await pdfMake.createPdf(dd).print();
        //this.modalctrl.dismiss({tipo:20, coma: this.Comanda});

        this.comandaPrint = await pdfMake.createPdf(dd);

        let options: PrintOptions = {
          name: 'Comanda',
          orientation: 'portrait',
          autoFit:false,
          ui:{hidePaperFormat: 'true'},
          monochrome: true
        };


        this.comandaPrint.getBuffer((buffer:any) => {
          const blob = new Blob([buffer], { type: 'application/pdf' });
          this.file.writeFile(this.file.dataDirectory, 'hello.pdf', blob, { replace: true }).then(fileEntry => {
            this.printer.print(this.file.dataDirectory + 'hello.pdf', options);
          });
        });*/

      }
      else{
        this.local.presentAlert(resp.message);
      }

    });
  }
}
