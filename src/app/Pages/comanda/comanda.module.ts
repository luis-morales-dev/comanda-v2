import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComandaPageRoutingModule } from './comanda-routing.module';

import { ComandaPage } from './comanda.page';
import { ComponentModule } from '../../components/component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    ComandaPageRoutingModule
  ],
  declarations: [ComandaPage]
})
export class ComandaPageModule {}
