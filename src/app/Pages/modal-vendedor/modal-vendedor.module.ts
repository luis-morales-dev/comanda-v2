import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalVendedorPageRoutingModule } from './modal-vendedor-routing.module';

import { ModalVendedorPage } from './modal-vendedor.page';
import { ComponentModule } from '../../components/component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    ModalVendedorPageRoutingModule
  ],
  declarations: [ModalVendedorPage]
})
export class ModalVendedorPageModule {}
