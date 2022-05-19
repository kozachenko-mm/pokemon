import { Types } from '../actionTypes';

export const fetchAllPokemons = (data) => ({
  type: Types.FETCH_ALL_POKEMONS,
  payload: data
});

export const fetchPokemonsInfo = (data) => ({
  type: Types.FETCH_POKEMONS_INFO,
  payload: data
});

export const getPokemonDetails = (data) => ({
  type: Types.POKEMON_DETAILS,
  payload: data
});
