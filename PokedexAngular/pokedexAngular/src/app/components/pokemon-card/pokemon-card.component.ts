import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss']
})
export class PokemonCardComponent implements OnInit {

  @Input() pokemonName: string = 'Pokemon Name'
  @Input() pokemonImage: string = 'Pokemon Image'

  constructor() {
  }

  ngOnInit(): void {
  }
}
