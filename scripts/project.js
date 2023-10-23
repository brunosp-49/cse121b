import alertMessage from './exportProject.js';

var pokemonData = [];

async function fetchPokemon() {
  const options = {
    method: `get`,
  };
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=20&offset=0`,
      options
    );
    const result = await response.json();
    var arrayPokemons = await Promise.all(
      result.results.map(async (pokemon, index) => {
        let pokemonUnique = await fetch(pokemon.url, options);
        var result = await pokemonUnique.json();
        return {
          name: pokemon.name,
          image: result.sprites.front_default,
          type: result.types[0].type.name,
        };
      })
    );
    pokemonData = arrayPokemons;
    displayPokemons(pokemonData);
  } catch (error) {
    console.error(error);
  }
}

fetchPokemon();

const typeFilter = document.getElementById(`type-filter`);
const pokemonList = document.getElementById(`pokemon-list`);

function filterPokemons() {
  const selectedType = typeFilter.value;

  const filteredPokemons =
    selectedType === `all`
      ? pokemonData
      : pokemonData.filter((pokemon) => pokemon.type === selectedType);

  displayPokemons(filteredPokemons);
}

function displayPokemons(pokemons) {
  pokemonList.innerHTML = ``;

  if (pokemons.length === 0) {
    pokemonList.innerHTML = `<p>No Pokémon found.</p>`;
    return;
  }

  pokemons.forEach((pokemon) => {
    const pokemonCard = document.createElement(`div`);
    const pokemonName = document.createElement(`h2`);
    const pokemonImage = document.createElement(`img`);
    const pokemonType = document.createElement(`h3`);
    pokemonCard.setAttribute(
      `class`,
      pokemon.type === `fire`
        ? `pokemon-card-fire`
        : pokemon.type === `water`
        ? `pokemon-card-water`
        : pokemon.type === `bug`
        ? `pokemon-card-bug`
        : pokemon.type === `grass`
        ? `pokemon-card-grass`
        : `pokemon-card-normal`
    );
    pokemonName.textContent = `${pokemon.name[0].toUpperCase()}${pokemon.name.substring(
      1
    )}`;
    pokemonImage.setAttribute(`src`, pokemon.image);
    pokemonImage.setAttribute(`alt`, `Profile image of ${pokemon.name}`);
    pokemonType.textContent = `${pokemon.type[0].toUpperCase()}${pokemon.type.substring(
      1
    )}`;
    pokemonCard.appendChild(pokemonName);
    pokemonCard.appendChild(pokemonImage);
    pokemonCard.appendChild(pokemonType);
    pokemonList.appendChild(pokemonCard);
  });
}

// Inicialmente, exibir todos os Pokémon
displayPokemons(pokemonData);
fetchPokemon();
typeFilter.addEventListener(`change`, filterPokemons);
alertMessage('Wellcome to the pokedex')