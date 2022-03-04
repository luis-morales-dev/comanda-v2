import { Injectable } from '@angular/core';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LocalService {
  loaddingc: any;

  constructor(private toastController: ToastController,
              private alertController: AlertController,
              private loadding: LoadingController) { }


    async presentToast(text: string,color:string) {
    const toast = await this.toastController.create({
      message: text,
      duration: 1000,
      color: color
    });
    toast.present();
  }

  async presentLoading(mensaje: string) {
    this.loaddingc = await this.loadding.create({
      // spinner: 'dots',
      message: mensaje
    });
    return this.loaddingc.present();
  }
async detenerloadding() {

  await this.loaddingc.dismiss();
}

async presentAlert(text: any) {
  const alert = await this.alertController.create({
    backdropDismiss: false,
    header: 'AVISO',
    message: text,
    buttons: [
       {
        text: 'Ok',
        handler: () => {
          alert.dismiss();
        }
      }
    ]
  });
  await alert.present();
}
}