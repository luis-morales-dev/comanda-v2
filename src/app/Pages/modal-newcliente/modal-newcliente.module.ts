import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalNewclientePageRoutingModule } from './modal-newcliente-routing.module';

import { ModalNewclientePage } from './modal-newcliente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalNewclientePageRoutingModule
  ],
  declarations: [ModalNewclientePage]
})
export class ModalNewclientePageModule {}
