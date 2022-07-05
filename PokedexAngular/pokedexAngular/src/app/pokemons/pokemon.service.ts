import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Pokemon } from "src/utils/types";

@Injectable({
  providedIn: 'root'
})

export class PokemonService {

  constructor( private http: HttpClient ) {
  }

  private api = 'https://pokeapi.co/api/v2';

  getPokemonList( offset: number = 0, limit: number = 25) {
    return this.http.get(`${this.api}/pokemon?limit=${limit}&offset=${offset}`) as Observable<{results: Pokemon[]}>;
  }

  getPokemonImageUri( id: number ) {
    const imageId = ('00' + id).slice(-3); // para 1 => 001
    return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${imageId}.png`;
  }

  getPokemon( id: number ) {
    return this.http.get(`${this.api}/pokemon/${id}`) as Observable<{results: Pokemon}>;
  }

}
