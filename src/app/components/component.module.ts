import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from './header/header.component';
import { ViewProductoComponent } from './view-producto/view-producto.component';
import { VlidapassComponent } from './vlidapass/vlidapass.component';
import { FolioComponent } from './folio/folio.component';



@NgModule({
  declarations: [
    HeaderComponent,
    ViewProductoComponent,
    VlidapassComponent,
    FolioComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ],
  exports:[
    HeaderComponent,
    ViewProductoComponent,
    VlidapassComponent,
    FolioComponent,
  ],
})
export class ComponentModule { }
