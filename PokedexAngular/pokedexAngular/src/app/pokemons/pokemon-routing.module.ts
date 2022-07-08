import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokedexComponent } from './pokedex/pokedex.component';
import { PokemonProfileComponent } from './pokemon-profile/pokemon-profile.component';
// import { PokemonResolver } from './pokemon.resolver'
const routes: Routes = [
  {
    path: '',
    component: PokedexComponent,
    // resolve: {
    //   pokemons: PokemonResolver
    // }
  },
  { path: ':id', component: PokemonProfileComponent},
  { path: '', redirectTo: '/pokedex', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PokemonRoutingModule { }
