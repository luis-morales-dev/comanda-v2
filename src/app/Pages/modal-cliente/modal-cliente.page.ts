import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalNewclientePage } from '../modal-newcliente/modal-newcliente.page';
import { PostsService } from '../../Services/posts.service';
import { Cliente } from '../../Interfaces/Interface';
import { LocalService } from '../../Services/local.service';

@Component({
  selector: 'app-modal-cliente',
  templateUrl: './modal-cliente.page.html',
  styleUrls: ['./modal-cliente.page.scss'],
})
export class ModalClientePage implements OnInit {
  @Input() id: number;
  nom_cliente:string;
  Clientes:Cliente[]=[];
  constructor(private modalctrl: ModalController,
              private post: PostsService,
              private local: LocalService) { }

  ngOnInit() {
  }
  async newuser(){
    const newclient = await this.modalctrl.create({
      component: ModalNewclientePage,
      backdropDismiss: false,
      cssClass:'new-clien',
    });
    await newclient.present();
    const miresp = await newclient.onWillDismiss();
    if(miresp!= undefined && miresp.data!= undefined){
     await this.segundocierre(miresp.data);
    }
  }
  async segundocierre(data: any){    
    await this.modalctrl.dismiss({
      id: data.id,
      nombre:data.nombre
    });  
    await this.modalctrl.dismiss({
      id: data.id,
      nombre:data.nombre
    });  
  }
  onSearchChange(event){
    if(event.detail.value!=''&& event.detail.value.length>=3){
    this.nom_cliente = event.detail.value;
    this.post.searchCliente(this.nom_cliente).subscribe(resp =>{
      if(resp.clientes.length>=1){
        this.Clientes= resp.clientes;
      }else{
        this.local.presentAlert('No existen referencias de clientes');
      }
    });    
  }
  }
  publico(){
    this.modalctrl.dismiss({
      id: null,
      nombre: 'Publico en General'
    });    

  }
  seleccion(item: Cliente){
    this.modalctrl.dismiss(item);    
  }
}
