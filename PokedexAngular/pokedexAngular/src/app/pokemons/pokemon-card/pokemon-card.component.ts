import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon } from 'src/utils/types';
import { pokemonColorMap, pokemonTypeColorMap, pokemonTypeColorMapMedium } from 'src/utils/utils';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss']
})
export class PokemonCardComponent implements OnInit {

  @Input() pokemon !: Pokemon;
  backgroundColor !: string;
  borderColor !: string;

  backgroundTypeColors = pokemonTypeColorMap;
  backgroundTypeColorsMedium = pokemonTypeColorMapMedium;

  constructor(
    private pokemonService: PokemonService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.getPokemonType();
  }

  async getPokemonType() {
    const type = await this.pokemonService.getPokemonFirstType(this.pokemon.id) || 'normal';
    this.backgroundColor = this.backgroundTypeColors[type]
    this.borderColor = this.backgroundTypeColors[type];
  }

  goToPokemonProfile() {
    this.router.navigate(['/pokedex/',this.pokemon.id]);
  }
}
