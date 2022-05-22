import axios from 'axios';
import { Dispatch } from 'react';
import { DetailsAction, DetailsTypes } from '../types/detailsTypes';
import { ListAction, ListTypes } from '../types/listTypes';
import { TypesAction, TypesTypes } from '../types/pokemonTypesTypes';

export const getPokemon = (url: string = 'https://pokeapi.co/api/v2/pokemon') => async (dispatch: Dispatch<ListAction>) => {
  try {
    dispatch({ type: ListTypes.FETCH_POKEMONS_LIST_START });

    const { data } = await axios(url);
    dispatch({
      type: ListTypes.FETCH_PAGINATION,
      payload: { previous: data.previous, next: data.next },
    });

    const pokemon = await Promise.all(
      data.results.map(async (el: any) => {
        const { data } = await axios(el.url);
        return data;
      }),
    );
    dispatch({ type: ListTypes.FETCH_POKEMONS_LIST_SUCCESS, payload: pokemon });
  } catch (error) {
    dispatch({ type: ListTypes.FETCH_POKEMONS_LIST_FAILURE, payload: { error } });
  }
};

export const getAllPokemonTypes = () => async (dispatch: Dispatch<TypesAction>) => {
  try {
    const { data } = await axios('https://pokeapi.co/api/v2/type');
    dispatch({ type: TypesTypes.FETCH_POKEMON_TYPES_SUCCESS, payload: data.results });
  } catch (error) {
    dispatch({ type: TypesTypes.FETCH_POKEMON_TYPES_FAILURE, payload: { error } });
  }
};

export const getPokemonByTypes = (value: string) => async (dispatch: Dispatch<TypesAction | ListAction>) => {
  try {
    dispatch({ type: ListTypes.FETCH_POKEMONS_LIST_START });
    dispatch({
      type: ListTypes.FETCH_PAGINATION,
      payload: { previous: '', next: '' },
    });

    const { data } = await axios(`https://pokeapi.co/api/v2/type/${value}`);
    const pokemon = await Promise.all(
      data.pokemon.map(async (el: any) => {
        const { data } = await axios(el.pokemon.url);
        return data;
      }),
    );

    dispatch({ type: ListTypes.FETCH_POKEMONS_LIST_SUCCESS, payload: pokemon });
  } catch (error) {
    dispatch({ type: TypesTypes.FETCH_POKEMON_TYPES_FAILURE, payload: { error } });
  }
};

export const getPokemonByName = (name: string) => async (dispatch: Dispatch<DetailsAction>) => {
  try {
    dispatch({ type: DetailsTypes.FETCH_POKEMON_DETAILS_START });

    const { data } = await axios(`https://pokeapi.co/api/v2/pokemon/${name}`);
    dispatch({ type: DetailsTypes.FETCH_POKEMON_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: DetailsTypes.FETCH_POKEMON_DETAILS_FAILURE,
      payload: { error },
    });
  }
};

export const getPokemonDetails = (pokemon: any) => (dispatch: Dispatch<DetailsAction>) => {
  dispatch({ type: DetailsTypes.FETCH_POKEMON_DETAILS_SUCCESS, payload: pokemon });
};
