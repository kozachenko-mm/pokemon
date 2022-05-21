import { Types } from '../actionTypes'

const INITIAL_STATE = {
	error: null,
	types: [],
}

export const pokemonTypesReducer = (state = INITIAL_STATE, { type, payload }) => {
	switch (type) {
		case Types.FETCH_POKEMON_TYPES_SUCCESS:
			return { error: null, types: payload }

		case Types.FETCH_POKEMON_TYPES_ERROR:
			return { ...state, error: payload }

		case Types.FETCH_POKEMONS_LIST_SUCCESS:
			return { error: null, types: [...state.types] }

		default:
			return state
	}
}
