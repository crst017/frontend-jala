import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon } from 'src/utils/types';
import { pokemonColorMap } from 'src/utils/utils';

@Component({
  selector: 'pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss']
})
export class PokemonCardComponent implements OnInit {

  @Input() pokemon !: Pokemon ;
  backgroundColor !: string;

  constructor(
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.backgroundColor = pokemonColorMap[this.pokemon.id]
  }

  goToPokemonProfile() {
    this.router.navigate(['/pokedex/',this.pokemon.id]);
  }
}
