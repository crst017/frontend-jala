import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { forkJoin, Observable } from "rxjs";
import { Pokemon } from "src/utils/types";
import { PokemonService } from "../pokemon.service";

@Injectable({
  providedIn: "root"
})

export class PokemonProfileResolver implements Resolve<any> {

  constructor( private pokemonService: PokemonService) {}

  resolve(route: ActivatedRouteSnapshot): any | Observable<any> | Promise<any> {
    const id = parseInt(route.paramMap.get('id') || '1');
    const pokemonData = this.pokemonService.getPokemon(id);
    const pokemonSpecie = this.pokemonService.getPokemonSpecie(id);
    return forkJoin({pokemonData,pokemonSpecie});
  }

}
