import { Component, Input, OnInit } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() title: string= '';
  @Input() modal: boolean= false;
  @Input() back: boolean= false;

  constructor(private navctrl:NavController, private modalctrl: ModalController) { }

  ngOnInit() {}
  //cerrar sesion
  async onLogout(){
   await localStorage.removeItem('usuario');
    this.navctrl.navigateRoot('/login');
  }
  didcerrar(){
    this.modalctrl.dismiss();
  }
}
