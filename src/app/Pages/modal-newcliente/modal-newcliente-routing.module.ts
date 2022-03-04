import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalNewclientePage } from './modal-newcliente.page';

const routes: Routes = [
  {
    path: '',
    component: ModalNewclientePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalNewclientePageRoutingModule {}
