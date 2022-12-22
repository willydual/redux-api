import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) {
    console.log("Servicio HTTP");
  }

  obtenerPokemons(id:number){
    console.log("https://pokeapi.co/api/v2/pokemon/"+id);
    return this.http.get("https://pokeapi.co/api/v2/pokemon/"+id);
  }
}
