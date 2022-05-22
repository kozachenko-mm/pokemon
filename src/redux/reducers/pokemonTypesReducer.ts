import { ListTypes } from '../types/listTypes';
import { ITypesState, TypesAction, TypesTypes } from '../types/pokemonTypesTypes';

const INITIAL_STATE: ITypesState = {
  error: null,
  types: [],
};

export const pokemonTypesReducer = (
  state = INITIAL_STATE,
  action: TypesAction,
): ITypesState => {
  switch (action.type) {
    case TypesTypes.FETCH_POKEMON_TYPES_SUCCESS:
      return { error: null, types: action.payload };

    case TypesTypes.FETCH_POKEMON_TYPES_FAILURE:
      return { ...state, error: action.payload };

    case ListTypes.FETCH_POKEMONS_LIST_SUCCESS:
      return { error: null, types: [...state.types] };

    default:
      return state;
  }
};
