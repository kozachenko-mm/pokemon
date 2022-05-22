import { IListState, ListAction, ListTypes } from '../types/listTypes';

const INITIAL_STATE: IListState = {
  loading: true,
  list: [],
  error: null,
  previous: '',
  next: '',
};

export const pokemonListReducer = (
  state = INITIAL_STATE,
  action: ListAction,
): IListState => {
  switch (action.type) {
    case ListTypes.FETCH_POKEMONS_LIST_START:
      return { ...state, loading: true };

    case ListTypes.FETCH_POKEMONS_LIST_SUCCESS:
      return { ...state, list: action.payload, loading: false };

    case ListTypes.FETCH_POKEMONS_LIST_FAILURE:
      return { ...state, error: action.payload, loading: false };

    case ListTypes.FETCH_PAGINATION:
      return { ...state, previous: action.payload.previous, next: action.payload.next };

    default:
      return state;
  }
};
