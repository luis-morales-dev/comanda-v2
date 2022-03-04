import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { LocalService } from '../../Services/local.service';
import { AuthService } from '../../Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  loginform: FormGroup;
  username: AbstractControl;
  password: AbstractControl;

  
  constructor(private formBuilder: FormBuilder,
    private local: LocalService,
    private auth: AuthService,
    private navctrl: NavController) {   
    this.loginform = this.formBuilder.group({
      username: [
        '',
        [
          Validators.required,
        ],
      ],
      password: [
        '',
        [
          Validators.required,
        ],
      ],
    });
    this.username = this.loginform.controls.telefono_movil;
    this.password = this.loginform.controls.password;
  }
  async acceder(){
  if (this.loginform.invalid){
    this.local.presentToast('campos requeridos','danger');
    return;
  } 

  await this.local.presentLoading('Validando Credenciales');
  await this.auth.login(this.loginform.value).subscribe(async resp => {    
    await this.local.detenerloadding();    
    if(resp.code==202){
      localStorage.setItem("usuario",JSON.stringify(resp.data));
      this.auth.data=resp.data;
      this.auth.old_password= this.password.value;      
      this.local.presentToast('Bienvenido '+ resp.data.nombre,'success')
      this.navctrl.navigateRoot('/comanda');
    }else{
      this.local.presentAlert(resp.message);
    }
  },async error =>{
    await this.local.detenerloadding();
  });
}

checkLocalStorage(){
  if (localStorage.getItem('usuario')) {
    this.auth.data = JSON.parse(localStorage.getItem('usuario'));
    this.navctrl.navigateRoot('/comanda');
  }
}
}
