import { Component, Input } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-folio',
  templateUrl: './folio.component.html',
  styleUrls: ['./folio.component.scss'],
})
export class FolioComponent {

  @Input() numeroFolio: number;

  constructor(private popctrl: PopoverController) { }

  //ngOnInit() {}

  cerrar(){
    this.popctrl.dismiss(10);
  }

}
