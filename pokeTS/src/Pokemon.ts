import axios from "axios";
/*

Pokemon class
  - one pokemon has name, id, types and moves
  
List of goals:
  - create a function to get all information of a pokemon from result of getSinglePokemon
  - get a List of types from a pokemon, assing to a variable called types
  - get a List of moves from a pokemon, you can only choose 4 moves by pokemon, those moves should be aleatory
  - fill Moves with missing data from Types you can get the information from url of the move.
  - re-write decortator to get new pokemons Ids in PokemonTrainer class 
*/
export function getSinglePokemon(id: string | number) {
  return axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
}

export async function getPokemonInfo( searchId : string | number ) {

    const result = await getSinglePokemon( searchId );
    const { id, name, types, moves } = result.data;
    return { id, name, types, moves }
}

type Move = {
  name: string;
  url: string;
  type?: string;
  damage?: number; // power
  powerPoints?: number; // pp
  accuracy?: number;
};

type Type = {
    name: string;
    url: string;
};

export class Pokemon {
    name: string = '';
    id: number = 0;
    moves: Move[] = [];
    types: Type[] = [];

    constructor(pokemonResult: any) {
        this.buildFieldsPokemon(pokemonResult);
    }

    async buildFieldsPokemon(pokemon: any) {
        this.name = pokemon.name;
        this.id = pokemon.id;
        this.types = await this.getPokemonTypes();
        this.moves = await this.setPokemonMoves();
        this.displayInfo();
        // you can only choose four moves from the list of moves
        // this.moves = someFn(pokemon.moves);
    }

    async getPokemonTypes() {
        const pokemonInfo = await getPokemonInfo( this.id );
        const pokemonTypes = pokemonInfo.types;

        const returnTypes = pokemonTypes.map( type => {
            return type.type
        });
        
        return returnTypes
    }

    async setPokemonMoves() {

        const pokemonInfo = await getPokemonInfo( this.id );
        const pokemonMoves = pokemonInfo.moves;
        const max = pokemonMoves.length;
        let newMoves: Move[] = [];

        for (let i = 0; i < 4; i++) {

            const number = Math.floor(Math.random() * (max + 1));
            const moveBasicInfo = pokemonMoves[number].move;
            const moveURL: string = moveBasicInfo.url;
            let moveURLInfo: any = await axios.get(moveURL);
            moveURLInfo = moveURLInfo.data;

            const newMove : Move = {
                name: moveBasicInfo.name,
                url: moveBasicInfo.url,
                type: moveURLInfo.type.name,
                damage: moveURLInfo.power,
                powerPoints: moveURLInfo.pp,
                accuracy: moveURLInfo.accuracy
            }
            newMoves.push( newMove );
        }
        return newMoves
    }

    displayInfo() {
        console.log(`==========================`);
        console.log(`${this.id} ${this.name}`);
        this.types.forEach(type => {
            console.log(`${type.name}`);
        });
        this.moves.forEach(move => {
            console.log(`${move.name}`);
        });
    }
}

// re-write decortator to get new pokemons Ids in PokemonTrainer class 

function getNewPokemons<T extends { new(...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
        listOfIds = [1,2,3];
    }
}

@getNewPokemons
export class PokemonTrainer {

    name: string;
    pokemons: Pokemon[] = [];
    listOfIds: number[] = [2,4];
    constructor(name: string) {
        this.name = name;
    }

    async getPokemons() {
        const listPokemons = this.listOfIds.map(id => getSinglePokemon(id));
        const results = await Promise.all(listPokemons)
        results.forEach(result => {
            const newPokemon = new Pokemon(result.data);
            console.log(newPokemon);
            this.pokemons.push( newPokemon );
        });
    }

    async showTeam() {
        await this.getPokemons();
        console.log('Trainer:', this.name);
        this.pokemons.forEach(pokemon => {
            pokemon.displayInfo();
        });
    }
}
