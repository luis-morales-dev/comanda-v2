import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalVendedorPage } from './modal-vendedor.page';

const routes: Routes = [
  {
    path: '',
    component: ModalVendedorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalVendedorPageRoutingModule {}
