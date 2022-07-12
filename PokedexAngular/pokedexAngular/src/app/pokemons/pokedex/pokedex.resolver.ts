import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { Pokemon } from "src/utils/types";
import { PokemonService } from "../pokemon.service";

@Injectable({
  providedIn: "root"
})


// Pokemon[]

export class PokedexResolver implements Resolve<Pokemon[]> {

  constructor( private pokemonService: PokemonService) {}

  resolve(route: ActivatedRouteSnapshot): any | Observable<Pokemon[]> | Promise<Pokemon[]> {
    return this.pokemonService.getPokemonList();
  }
}
