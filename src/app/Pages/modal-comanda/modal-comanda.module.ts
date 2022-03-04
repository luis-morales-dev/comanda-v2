import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalComandaPageRoutingModule } from './modal-comanda-routing.module';

import { ModalComandaPage } from './modal-comanda.page';
import { ComponentModule } from '../../components/component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    ComponentModule,
    ModalComandaPageRoutingModule
  ],
  declarations: [ModalComandaPage]
})
export class ModalComandaPageModule {}
