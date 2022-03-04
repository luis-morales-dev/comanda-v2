import { Component, Input, OnInit } from '@angular/core';
import { Vendedor } from '../../Interfaces/Interface';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-vendedor',
  templateUrl: './modal-vendedor.page.html',
  styleUrls: ['./modal-vendedor.page.scss'],
})
export class ModalVendedorPage {
@Input() vendedores: Vendedor[]=[];
@Input() id: number;

  constructor(private modalctrl: ModalController) { }

  eleccion(v:Vendedor){
    this.modalctrl.dismiss(v);

  }
}
