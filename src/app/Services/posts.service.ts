import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth.service';
import { RestCliente, RestProducto, IntComanda, Respuesta } from '../Interfaces/Interface';
const url = environment.url


@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient,
              private auth: AuthService) { }

  searchCliente(search_cliente: string) {
    return this.http.post<RestCliente>(`${url}cliente/get-cliente`, {token:this.auth.data.token, search_cliente}, {});
  }
  crearCliente(data: any){
    //http://demo-arroyo.lerco.agency/web/v1/cliente/post-create
    return this.http.post<RestCliente>(`${url}cliente/post-create`, data, {});
  }
  getproductos(producto_name: string, token: string){
    // http://demo-arroyo.lerco.agency/web/v1/producto/get-producto
    return this.http.post<RestProducto>(`${url}producto/get-producto`, {token, producto_name}, {});
  }
  crearComanda(comanda: any){
    console.log(comanda);
    
    // http://demo-arroyo.lerco.agency/web/v1/tpv/post-pre-captura
  return this.http.post<Respuesta>(`${url}tpv/post-pre-captura`,comanda, {});


  }
}
