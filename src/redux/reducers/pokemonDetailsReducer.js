import { Types } from '../actionTypes'

const INITIAL_STATE = {
	loading: false,
	info: null,
	error: null,
}
export const pokemonDetailsReducer = (state = INITIAL_STATE, { type, payload }) => {
	switch (type) {
		case Types.FETCH_POKEMON_DETAILS_START:
			return { ...INITIAL_STATE, loading: true }

		case Types.FETCH_POKEMON_DETAILS_SUCCESS:
			return { ...INITIAL_STATE, info: payload }

		case Types.FETCH_POKEMON_DETAILS_FAILURE:
			return { ...INITIAL_STATE, error: payload }

		default:
			return state
	}
}
