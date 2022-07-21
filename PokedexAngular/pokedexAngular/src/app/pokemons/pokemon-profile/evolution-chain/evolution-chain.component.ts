import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { pokemonColorMap } from 'src/utils/utils';
import { PokemonService } from '../../pokemon.service';

@Component({
  selector: 'evolution-chain',
  templateUrl: './evolution-chain.component.html',
  styleUrls: ['./evolution-chain.component.scss']
})
export class EvolutionChainComponent implements OnInit {


  evolutionChain : any[] = [];
  @Input() bgColors !: any;

  constructor(
    private pokemonService: PokemonService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {

    const data = this.route.snapshot.data['pokemonData'].pokemonSpecie;
    const chainUrl = data.evolution_chain.url;
    this.getEvolutionChain(chainUrl);
  }

  async getEvolutionChain( url: string) {
    const result : any = await this.pokemonService.getEvolutionChain(url);
    let chain = result.chain
    do {
        const id = this.getPokemonIdFromUrl(chain.species.url);

        this.evolutionChain.push({
            name: chain.species.name,
            image: this.pokemonService.getPokemonImageUri(parseInt(id)),
            color: pokemonColorMap[id],
            id: id
        });
        chain = chain.evolves_to[0];
    } while (!!chain);
  }

  getPokemonIdFromUrl(url: string): string {
    const id: string = url.split('/')[6];
    return id;
  }

  goToPokemonProfile(pokemon : any) {
    this.router.navigate(['/pokedex/',pokemon.id]);
  }
}
