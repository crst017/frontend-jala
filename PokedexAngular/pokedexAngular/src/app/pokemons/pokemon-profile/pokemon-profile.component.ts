import { Component, OnInit, Type } from '@angular/core';
import { Location } from '@angular/common';
import { PokemonService } from '../pokemon.service';
import { ActivatedRoute } from '@angular/router';
import { Pokemon, PokemonType } from 'src/utils/types';

@Component({
  selector: 'app-pokemon-profile',
  templateUrl: './pokemon-profile.component.html',
  styleUrls: ['./pokemon-profile.component.scss']
})
export class PokemonProfileComponent implements OnInit {

  id: number = 1;
  pokemon !: Pokemon;

  constructor(
    private location: Location,
    private pokemonService: PokemonService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {

    const data = this.route.snapshot.data['pokemonData'];

    const id = this.route.snapshot.paramMap.get('id') || '1';
    this.id = parseInt(id);
    this.setPokemonInfo( data );
  }

  goBack() {
    this.location.back();
  }

  async setPokemonInfo( data: any) {

    const dataPokemon = data.pokemonData;
    const dataSpecies = data.pokemonSpecie;
    const img = this.pokemonService.getPokemonImageUri(this.id);
    const types = dataPokemon.types.map( (type : any) => type.type.name);
    const stats = dataPokemon.stats.map( (stat : any) => {
      return {
        name: stat.stat.name,
        base_stat: stat.base_stat
      }
    })

    this.pokemon = {
      id: this.id,
      name: dataPokemon.name,
      img: img,
      description: dataSpecies.flavor_text_entries[0].flavor_text,
      sprites: [ dataPokemon.sprites.front_default, dataPokemon.sprites.back_default],
      types: types,
      stats: stats
    }
  }

}
