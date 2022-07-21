import { Component, HostBinding, OnInit, Type } from '@angular/core';
import { Location } from '@angular/common';
import { PokemonService } from '../pokemon.service';
import { ActivatedRoute } from '@angular/router';
import { Pokemon, PokemonType } from 'src/utils/types';
import { pokemonTypeColorMap, pokemonTypeColorMapMedium, pokemonTypeColorMapSoft } from 'src/utils/utils';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-pokemon-profile',
  templateUrl: './pokemon-profile.component.html',
  styleUrls: ['./pokemon-profile.component.scss']
})
export class PokemonProfileComponent implements OnInit {

  id: number = 1;
  pokemon !: Pokemon;
  backgroundTypeColors = pokemonTypeColorMap;
  backgroundTypeColorsMedium = pokemonTypeColorMapMedium;
  backgroundTypeColorsSoft = pokemonTypeColorMapSoft;
  colorValue = 'pasando valor';

  constructor(
    private location: Location,
    private pokemonService: PokemonService,
    private route: ActivatedRoute,

  ) { }

  @HostBinding("style.--bg-strong")
  bgStrong !: string
  @HostBinding("style.--bg-medium")
  bgMedium !: string
  @HostBinding("style.--bg-soft")
  bgSoft !: string

  ngOnInit(): void {

    this.route.paramMap.subscribe( params => {
      const data = this.route.snapshot.data['pokemonData'];
      const id = params.get('id') || '1';
      this.id = parseInt(id);
      this.setPokemonInfo(data);
    })
  }

  goBack() {
    this.location.back();
  }

  async setPokemonInfo( data: any) {

    const dataPokemon = data.pokemonData;
    const dataSpecies = data.pokemonSpecie;
    const img = this.pokemonService.getPokemonImageUri(this.id);
    const types = dataPokemon.types.map( (type : any) => type.type.name) || ['normal'];
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
    this.bgStrong = this.backgroundTypeColors[types[0]];
    this.bgMedium = this.backgroundTypeColorsMedium[types[0]];
    this.bgSoft = this.backgroundTypeColorsSoft[types[0]];
  }

}
