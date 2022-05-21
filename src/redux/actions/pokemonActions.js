import { Types } from '../actionTypes'

export const fetchAllPokemons = data => ({
	type: Types.FETCH_ALL_POKEMONS,
	payload: data,
})

// list

export const startFetchPokemonList = () => ({ type: Types.FETCH_POKEMONS_LIST_START })

export const fetchPokemonsList = data => ({
	type: Types.FETCH_POKEMONS_LIST_SUCCESS,
	payload: data,
})

export const failuteFetchPokemonList = err => ({
	type: Types.FETCH_POKEMONS_LIST_FAILURE,
	payload: err,
})

// details

export const startFetchPokemonDetails = () => ({
	type: Types.FETCH_POKEMON_DETAILS_START,
})

export const successFetchPokemonDetails = data => ({
	type: Types.FETCH_POKEMON_DETAILS_SUCCESS,
	payload: data,
})

export const failuteFetchPokemonDetails = err => {
	console.log(err)
	return {
		type: Types.FETCH_POKEMON_DETAILS_FAILURE,
		payload: err,
	}
}

// types

export const fetchPokemonTypesSuccess = data => ({
	type: Types.FETCH_POKEMON_TYPES_SUCCESS,
	payload: data,
})

export const failuteFetchPokemonTypes = err => ({
	type: Types.FETCH_POKEMON_TYPES_ERROR,
	payload: err,
})
