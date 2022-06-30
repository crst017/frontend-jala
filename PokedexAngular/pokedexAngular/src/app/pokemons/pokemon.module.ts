import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';
import { PokedexComponent } from './pokedex/pokedex.component';
import { PokemonRoutingModule } from './pokemon-routing.module';
import { PokemonProfileComponent } from './pokemon-profile/pokemon-profile.component';

@NgModule({
  declarations: [
    PokedexComponent,
    PokemonCardComponent,
    PokemonProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [
    PokedexComponent,
    PokemonRoutingModule
  ],
  providers: [],
})

export class PokemonModule { }
