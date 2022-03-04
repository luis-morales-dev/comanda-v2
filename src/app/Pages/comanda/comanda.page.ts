import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../Services/auth.service';
import { IntComanda, Vendedor } from '../../Interfaces/Interface';
import { ModalController } from '@ionic/angular';
import { ModalVendedorPage } from '../modal-vendedor/modal-vendedor.page';
import { ModalClientePage } from '../modal-cliente/modal-cliente.page';
import { ModalComandaPage } from '../modal-comanda/modal-comanda.page';

@Component({
  selector: 'app-comanda',
  templateUrl: './comanda.page.html',
  styleUrls: ['./comanda.page.scss'],
})
export class ComandaPage implements OnInit {
vendedores: Vendedor[]=[];
comanda_reset: IntComanda={
  token:'',
  nom_vendedor:'',
  cliente:'',
  Total: null,
  productos:[],
  cliente_id: null,
}
comanda1: IntComanda={
  token:'',
  nom_vendedor:'',
  cliente:'',
  Total: null,
  productos:[],
  cliente_id: null,
}
comanda2:IntComanda ={
  token:'',
  nom_vendedor:'',
  cliente:'',
  Total: null,
  productos:[],
  cliente_id: null,
}
comanda3:IntComanda ={
  token:'',
  nom_vendedor:'',
  cliente:'',
  Total: null,
  productos:[],
  cliente_id: null,
}
comanda4:IntComanda ={
  token:'',
  nom_vendedor:'',
  cliente:'',
  Total: null,
  productos:[],
  cliente_id: null,
}
comanda5:IntComanda ={
  token:'',
  nom_vendedor:'',
  cliente:'',
  Total: null,
  productos:[],
  cliente_id: null,
}
comanda6:IntComanda ={
  token:'',
  nom_vendedor:'',
  cliente:'',
  Total: null,
  productos:[],
  cliente_id: null,
}
comanda7:IntComanda ={
  token:'',
  nom_vendedor:'',
  cliente:'',
  Total: null,
  productos:[],
  cliente_id: null,
}
comanda8:IntComanda ={
  token:'',
  nom_vendedor:'',
  cliente:'',
  Total: null,
  productos:[],
  cliente_id: null,
}

  constructor(private auth: AuthService, private modalctrl: ModalController) { }

  ngOnInit() {
    this.auth.getVendedores().subscribe(resp => {
      this.vendedores= resp.vendedores;      
    });
  }
  async vervendedores(id: number){
    const mdlvendedor = await this.modalctrl.create({
      component: ModalVendedorPage,
      backdropDismiss: false,
      componentProps:{
        id,
        vendedores: this.vendedores
      }
    });
    await mdlvendedor.present();
    const {data}= await mdlvendedor.onWillDismiss();
    if(data!= undefined){
      let comanda: IntComanda={
      token: data.token,
      nom_vendedor: data.nombre,
      cliente:'',
      Total: null,
      productos:[],
      cliente_id: null,
      };
      this.vercliente(comanda,id);
  }
}
  async vercliente(comanda:IntComanda,id: number) {
    const mdlclient = await this.modalctrl.create({
      component: ModalClientePage,
      backdropDismiss: false,
      cssClass:'modal-client',
      componentProps:{
        id
      }
    });
    await mdlclient.present();
    const {data}= await mdlclient.onWillDismiss();
    if(data!= undefined){
      switch (id) {
        case 1:
          comanda.cliente= data.nombre;
          comanda.cliente_id= data.id;
          comanda.comanda= id;
          this.comanda1= comanda;
          await this.onClick(this.comanda1);
          break;
        case 2:
          comanda.cliente= data.nombre;
          comanda.cliente_id= data.id;
          comanda.comanda= id;
          this.comanda2= comanda;
            this.onClick(this.comanda2);
          break;
        case 3:
          comanda.cliente= data.nombre;
          comanda.cliente_id= data.id;
          comanda.comanda= id;
          this.comanda3= comanda;
            this.onClick(this.comanda3);
          break;
        case 4:
          comanda.cliente= data.nombre;
          comanda.cliente_id= data.id;
          comanda.comanda= id;
          this.comanda4= comanda;
            this.onClick(this.comanda4);
          break;
        case 5:
          comanda.cliente= data.nombre;
          comanda.cliente_id= data.id;
          comanda.comanda= id;
          this.comanda5= comanda;
            this.onClick(this.comanda5);
          break;
        case 6:
          comanda.cliente= data.nombre;
          comanda.cliente_id= data.id;
          comanda.comanda= id;
          this.comanda6= comanda;
            this.onClick(this.comanda6);
          break;
        case 7:
          comanda.cliente= data.nombre;
          comanda.cliente_id= data.id;
          comanda.comanda= id;
          this.comanda7= comanda;
            this.onClick(this.comanda7);
          break;
        case 8:
          comanda.cliente= data.nombre;
          comanda.cliente_id= data.id;
          comanda.comanda= id;
          this.comanda8= comanda;
            this.onClick(this.comanda8);
          break;
        default:
          break;
      }
  }
}
vercomanda(id: number){
  switch (id) {
    case 1:      
      if(this.comanda1.token=='' || this.comanda1.cliente==''){
        this.vervendedores(id);
      }else{
        this.onClick(this.comanda1);
      }
      break;
    case 2:
      if(this.comanda2.token=='' || this.comanda2.cliente==''){
        this.vervendedores(id);
      }else{
        this.onClick(this.comanda2);
      }
      break;
    case 3:
      if(this.comanda3.token=='' || this.comanda3.cliente==''){
        this.vervendedores(id);
      }else{
        this.onClick(this.comanda3);
      }
      break;
    case 4:
      if(this.comanda4.token=='' || this.comanda4.cliente==''){
        this.vervendedores(id);
      }else{
        this.onClick(this.comanda4);
      }
      break;
    case 5:
      if(this.comanda5.token=='' || this.comanda5.cliente==''){
        this.vervendedores(id);
      }else{
        this.onClick(this.comanda5);
      }
      break;
    case 6:
      if(this.comanda6.token=='' || this.comanda6.cliente==''){
        this.vervendedores(id);
      }else{
        this.onClick(this.comanda6);
      }
      break;
    case 7:
      if(this.comanda7.token=='' || this.comanda7.cliente==''){
        this.vervendedores(id);
      }else{
        this.onClick(this.comanda7);
      }
      break;
    case 8:
      if(this.comanda8.token=='' || this.comanda8.cliente==''){
        this.vervendedores(id);
      }else{
        this.onClick(this.comanda8);
      }
      break;
    default:
      break;
  }
}
  async onClick( micomanda:IntComanda){
  const comanda= await this.modalctrl.create({
    component:ModalComandaPage,
    backdropDismiss:false,
    cssClass:'comandacss',
    componentProps:{
      Comanda: micomanda
    }
  });
  await comanda.present();
  const {data} = await comanda.onWillDismiss();
  console.log(data);
  if(data.tipo==20){
    switch (data.coma.comanda) {
        case 1:
         this.comanda1= this.comanda_reset;         
          break;
        case 2:
          this.comanda2= this.comanda_reset;
          break;
        case 3:
          this.comanda3= this.comanda_reset;
          break;
        case 4:
          this.comanda4= this.comanda_reset;
          break;
        case 5:
          this.comanda5= this.comanda_reset;
          break;
        case 6:
          this.comanda6= this.comanda_reset;
          break;
        case 7:
          this.comanda7= this.comanda_reset;
          break;
        case 8:
          this.comanda8= this.comanda_reset;
          break;
        default:
          break;
      }  
    }
}
}
