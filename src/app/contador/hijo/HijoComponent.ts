import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styles: []
})
export class HijoComponent implements OnInit{

  @Input() contador=0;
  @Output() cambioContador = new EventEmitter<number>();
  constructor() {}
    ngOnInit(){
    }

    multiplicar(){
      this.contador *=2;
      this.cambioContador.emit(this.contador);
    }

    dividir(){
      this.contador /=2;
      this.cambioContador.emit(this.contador);
    }
}
