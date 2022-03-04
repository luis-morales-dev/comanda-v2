import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalClientePageRoutingModule } from './modal-cliente-routing.module';

import { ModalClientePage } from './modal-cliente.page';
import { ComponentModule } from '../../components/component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    ModalClientePageRoutingModule
  ],
  declarations: [ModalClientePage]
})
export class ModalClientePageModule {}
