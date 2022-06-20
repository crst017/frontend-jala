import { Component } from '@angular/core';
import { dataPokemons, getPokemonImageUri, pokemonColorMap } from '../utils/utils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'pokedexAngular';

  pokemons !: any;

  constructor() {
    this.pokemons = dataPokemons.results;
    this.pokemons.forEach( ( pokemon: any,index: number) => {
      const pokemonId = index + 1;
      pokemon.img = getPokemonImageUri(pokemonId);
      pokemon.bgColor = pokemonColorMap[pokemonId];
    });
    console.log(this.pokemons);
  }
}
