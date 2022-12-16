import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';


@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styles: []
})
export class HijoComponent implements OnInit{

  @Input() contador=0;
  @Output() cambioContador = new EventEmitter<number>();
  listaPokemon: any = [];
  constructor(private userService: UsersService) {
  }
    ngOnInit(): void{
    }

    consulta(){
      this.userService.obtenerPokemons(this.contador)
      .subscribe(response => this.listaPokemon = response);
      console.log(this.listaPokemon[0].name);
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
