import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { RestLogin, RestVendedor, Usuario } from '../Interfaces/Interface';
const url = environment.url

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  data: Usuario={};
old_password: string='';

  constructor(private http: HttpClient) { }

  login(body: any) {
    return this.http.post<RestLogin>(`${url}auth/login`, body, {});
  }
  getVendedores(){
    return this.http.post<RestVendedor>(`${url}user/get-vendedores`, {token: this.data.token}, {});

  }
}
