import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Producto } from 'src/app/Interfaces/Interface';

@Component({
  selector: 'app-view-producto',
  templateUrl: './view-producto.component.html',
  styleUrls: ['./view-producto.component.scss'],
})
export class ViewProductoComponent {
@Input() productos: Producto[] = [];
@Output() miproducto = new EventEmitter<Producto>();

  constructor() { }

  producto(item: Producto){
    this.miproducto.emit(item);
  }
}
