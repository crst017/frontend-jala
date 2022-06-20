import { Component } from '@angular/core';
import { dataPokemons, getPokemonImageUri } from '../utils/utils';

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
      pokemon.img = getPokemonImageUri(index + 1)
    });
    console.log(this.pokemons);
  }
}
