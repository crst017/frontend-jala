import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { PokemonService } from '../pokemon.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pokemon-profile',
  templateUrl: './pokemon-profile.component.html',
  styleUrls: ['./pokemon-profile.component.scss']
})
export class PokemonProfileComponent implements OnInit {

  id: string = '1';
  fields ?: any;

  constructor(
    private location: Location,
    private pokemonService: PokemonService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id') || '1';
    this.pokemonService.getPokemon(this.id)
      .subscribe( pokemonDetail => {
        this.fields = pokemonDetail});
  }

  goBack() {
    this.location.back();
  }
}
