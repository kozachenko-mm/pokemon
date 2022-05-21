import { Types } from '../actionTypes'

const PAGINATION_STATE = {
	previous: null,
	next: null,
}

export const paginationReducer = (state = PAGINATION_STATE, { type, payload }) => {
	switch (type) {
		case Types.FETCH_ALL_POKEMONS:
			return { previous: payload.previous, next: payload.next }

		default:
			return state
	}
}
