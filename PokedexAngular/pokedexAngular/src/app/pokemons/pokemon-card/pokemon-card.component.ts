import { Component, OnInit, Input } from '@angular/core';
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

  constructor() {
  }

  ngOnInit(): void {
    this.backgroundColor = pokemonColorMap[this.pokemon.id]
  }
}
