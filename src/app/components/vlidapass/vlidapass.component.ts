import { Component } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { AuthService } from '../../Services/auth.service';

@Component({
  selector: 'app-vlidapass',
  templateUrl: './vlidapass.component.html',
  styleUrls: ['./vlidapass.component.scss'],
})
export class VlidapassComponent {
  pass: string='';

  constructor(public auth: AuthService,
              private popctrl: PopoverController) { }

  verifica(){
    this.popctrl.dismiss(10);
  }
  didcerrar(){
    this.popctrl.dismiss();
  }
}
