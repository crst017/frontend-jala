import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { Pokemon } from "src/utils/types";
import { PokemonService } from "../pokemon.service";

@Injectable({
  providedIn: "root"
})

export class PokemonResolver implements Resolve<any> {

  constructor( private pokemonService: PokemonService) {}

  resolve(route: ActivatedRouteSnapshot): any | Observable<any> | Promise<any> {
    const id = parseInt(route.paramMap.get('id') || '1')
    return this.pokemonService.getPokemon(id)
  }
}
