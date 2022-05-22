import { combineReducers } from 'redux';
import { pokemonDetailsReducer } from './pokemonDetailsReducer';
import { pokemonListReducer } from './pokemonListReducer';
import { pokemonTypesReducer } from './pokemonTypesReducer';

export const rootReducer = combineReducers({
  pokemonDetails: pokemonDetailsReducer,
  pokemonList: pokemonListReducer,
  pokemonTypes: pokemonTypesReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
