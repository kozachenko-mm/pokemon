import { Types } from '../actionTypes'

const POKEMON_LIST_STATE = {
	loading: true,
	list: [],
	error: null,
}

export const pokemonListReducer = (state = POKEMON_LIST_STATE, { type, payload }) => {
	switch (type) {
		case Types.FETCH_POKEMONS_LIST_START:
			return { loading: true, error: null, list: [] }

		case Types.FETCH_POKEMONS_LIST_SUCCESS:
			return { loading: false, error: null, list: payload }

		case Types.FETCH_POKEMONS_LIST_FAILURE:
			return { loading: false, error: payload, list: [] }

		default:
			return state
	}
}
