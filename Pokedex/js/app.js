import '../styles/less/style.less';
import { getPokemonImageUri, pokemonColorMap, getPokemons } from "../utils/index.js"
const API_URL = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=25'

getPokemons(API_URL)
    .then( res => renderCards(res))

const createPokemonCard = ( image, name, color) => {
    
    const card = document.createElement('div');
    card.classList.add('pokemon-card');
    card.style.backgroundColor = color;

    const pokemonImage = document.createElement('img');
    pokemonImage.src = image;

    const pokemonName = document.createElement('span');
    pokemonName.textContent = name

    card.appendChild(pokemonImage);
    card.appendChild(pokemonName);

    return card
}

const renderCards = ( dataPokemons ) => {
    dataPokemons.results.forEach( (pokemon, index) => {

        const image = getPokemonImageUri(index + 1);
        const color = pokemonColorMap[index+1]
        const name = pokemon.name;
        const pokemonCard = createPokemonCard(image,name,color);
    
        const container = document.querySelector('.cards-container');
        container.appendChild(pokemonCard);
    });
}


