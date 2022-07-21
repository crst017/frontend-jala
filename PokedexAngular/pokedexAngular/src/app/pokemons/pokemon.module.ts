import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';
import { PokedexComponent } from './pokedex/pokedex.component';
import { PokemonRoutingModule } from './pokemon-routing.module';
import { PokemonProfileComponent } from './pokemon-profile/pokemon-profile.component';
import { CommonModule } from '@angular/common';
import { AddPokemonComponent } from './add-pokemon/add-pokemon.component';
import { EvolutionChainComponent } from './pokemon-profile/evolution-chain/evolution-chain.component';

@NgModule({
  declarations: [
    PokedexComponent,
    PokemonCardComponent,
    PokemonProfileComponent,
    AddPokemonComponent,
    EvolutionChainComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    PokemonRoutingModule,
    ReactiveFormsModule
  ],
  exports: [],
  providers: [],
})

export class PokemonModule { }
