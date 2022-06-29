import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/utils/types';
import { dataPokemons, getPokemonImageUri, pokemonColorMap } from '../../../utils/utils';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss']
})
export class PokedexComponent implements OnInit {

  pokemons: Pokemon[] = [];
  filteredPokemons: Pokemon[] = [];
  limit: number = 50;
  offset: number = 0;
  inputFilter: string = ''

  constructor(
    private pokemonService: PokemonService
  ) {}

  ngOnInit(): void {

    this.pokemonService.getPokemonList(this.offset, this.limit)
      .subscribe(
        (data: {results: Pokemon[]}) => {

            this.setPokemonProperties( data.results );
            this.pokemons = [ ...this.pokemons, ...data.results]
            this.filteredPokemons = this.pokemons;
        }
      );
  }

  setPokemonProperties( pokemonList: Pokemon[] ): void {
    pokemonList.forEach( (pokemon, index) => {
      const pokemonIndex = Number(this.offset) + index + 1;
      pokemon.id = pokemonIndex;
      pokemon.img = this.pokemonService.getPokemonImageUri( pokemonIndex );
    });
  }

  searchPokemon(value: string) {

    const pokemonCoincidences = this.pokemons.filter( pokemon => {
      const pokemonName = pokemon.name.toLowerCase();
      const filter = value.toLowerCase();
      return pokemonName.includes(filter);
    });

    this.filteredPokemons = pokemonCoincidences.length != 0 ? pokemonCoincidences : [];
  }

  paginate() {
    this.pokemonService.getPokemonList(this.offset, this.limit)
    .subscribe(
      (data: {results: Pokemon[]}) => {

          this.setPokemonProperties( data.results );
          this.pokemons = [ ...this.pokemons, ...data.results]
          this.filteredPokemons = data.results;
      }
    );
  }
}
