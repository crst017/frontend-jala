import { dataPokemons, getPokemonImageUri, pokemonColorMap } from "./utils.js"

const createPokemonCard = ( image, name, color = '' ) => {
    
    const card = document.createElement('div');
    card.classList.add('pokemon-card',`color-${color}`);

    const pokemonImage = document.createElement('img');
    pokemonImage.src = image;

    const pokemonName = document.createElement('span');
    pokemonName.textContent = name

    card.appendChild(pokemonImage);
    card.appendChild(pokemonName);

    return card
}

dataPokemons.results.forEach( (pokemon, index) => {

    const image = getPokemonImageUri(index + 1);
    const color = pokemonColorMap[index+1]
    const name = pokemon.name;
    const pokemonCard = createPokemonCard(image,name,color);

    const container = document.querySelector('.cards-container');
    container.appendChild(pokemonCard);
});

