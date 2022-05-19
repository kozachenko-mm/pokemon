import { combineReducers } from 'redux';
import { Types } from '../actionTypes';

const PAGINATION_STATE = {
  previous: null,
  next: null
};

const pagination = (state = PAGINATION_STATE, { type, payload }) => {
  switch (type) {
    case Types.FETCH_ALL_POKEMONS:
      return { previous: payload.previous, next: payload.next };

    default:
      return state;
  }
};

const pokemonsInfo = (state = [], { type, payload }) => {
  switch (type) {
    case Types.FETCH_POKEMONS_INFO:
      return payload;

    default:
      return state;
  }
};

const pokemonDetails = (state = {}, { type, payload }) => {
  switch (type) {
    case Types.POKEMON_DETAILS:
      return payload;

    default:
      return state;
  }
};

export const pokemonReducer = combineReducers({
  pagination,
  pokemonsInfo,
  pokemonDetails
});
