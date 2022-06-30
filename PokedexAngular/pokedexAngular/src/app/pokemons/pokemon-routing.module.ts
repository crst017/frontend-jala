import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokedexComponent } from './pokedex/pokedex.component';
import { PokemonProfileComponent } from './pokemon-profile/pokemon-profile.component';

const routes: Routes = [
  { path: 'pokedex', component: PokedexComponent },
  { path: 'pokedex/:id', component: PokemonProfileComponent},
  { path: '', redirectTo: '/pokedex', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class PokemonRoutingModule { }
