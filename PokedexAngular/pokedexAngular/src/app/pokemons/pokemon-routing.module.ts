import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokedexComponent } from './pokedex/pokedex.component';
import { PokemonProfileComponent } from './pokemon-profile/pokemon-profile.component';
import { PokemonProfileResolver } from './pokemon-profile/pokemon-profile.resolver'
import { PokedexResolver } from './pokedex/pokedex.resolver';

const routes: Routes = [
  {
    path: '',
    component: PokedexComponent,
    resolve: {
      pokemons: PokedexResolver
    }
  },
  {
    path: ':id',
    component: PokemonProfileComponent,
    resolve: {
      pokemonData: PokemonProfileResolver
    }
  },
  { path: '', redirectTo: '/pokedex', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PokemonRoutingModule { }
