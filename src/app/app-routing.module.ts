import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./Pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'comanda',
    loadChildren: () => import('./pages/comanda/comanda.module').then( m => m.ComandaPageModule)
  },
  {
    path: 'modal-vendedor',
    loadChildren: () => import('./pages/modal-vendedor/modal-vendedor.module').then( m => m.ModalVendedorPageModule)
  },
  {
    path: 'modal-cliente',
    loadChildren: () => import('./pages/modal-cliente/modal-cliente.module').then( m => m.ModalClientePageModule)
  },
  {
    path: 'modal-newcliente',
    loadChildren: () => import('./pages/modal-newcliente/modal-newcliente.module').then( m => m.ModalNewclientePageModule)
  },
  {
    path: 'modal-comanda',
    loadChildren: () => import('./pages/modal-comanda/modal-comanda.module').then( m => m.ModalComandaPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
