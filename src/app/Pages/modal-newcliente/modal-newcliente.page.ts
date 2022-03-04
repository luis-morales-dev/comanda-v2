import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AuthService } from '../../Services/auth.service';
import { PostsService } from '../../Services/posts.service';
import { LocalService } from '../../Services/local.service';

@Component({
  selector: 'app-modal-newcliente',
  templateUrl: './modal-newcliente.page.html',
  styleUrls: ['./modal-newcliente.page.scss'],
})
export class ModalNewclientePage {
  form ={
    token : '',
    nombre : '',
    apellidos : '',
    telefono_movil : '',
    telefono : '',
    email : ''
  }
  constructor(private modalctrl: ModalController,
              private auth: AuthService,
              private post: PostsService,
              private local: LocalService) { }

  didcerrar(){
this.modalctrl.dismiss();
  }
  async agregar(){
    this.form.token= this.auth.data.token;
    await this.local.presentLoading('Cargando...!');
    this.post.crearCliente(this.form).subscribe(async resp =>{
      await this.local.detenerloadding();
      if(resp.code==202){
        this.modalctrl.dismiss(resp.cliente);
      }else{
        this.local.presentAlert(resp.message);
      }
    });
  }
}
