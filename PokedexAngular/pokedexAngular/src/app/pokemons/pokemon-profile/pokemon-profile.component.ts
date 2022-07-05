import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { PokemonService } from '../pokemon.service';
import { ActivatedRoute } from '@angular/router';
import { Pokemon } from 'src/utils/types';

@Component({
  selector: 'app-pokemon-profile',
  templateUrl: './pokemon-profile.component.html',
  styleUrls: ['./pokemon-profile.component.scss']
})
export class PokemonProfileComponent implements OnInit {

  id: number = 1;
  pokemonInfo !: Pokemon;

  constructor(
    private location: Location,
    private pokemonService: PokemonService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') || '1';
    this.id = parseInt(id);

    this.pokemonService.getPokemon(this.id)
      .subscribe( ( data: { results: Pokemon } ) => {

        // this.pokemonInfo.id = this.id;
        // this.pokemonInfo.name = data.results.name;
        console.log(data)
      });
  }

  goBack() {
    this.location.back();
  }
}
