import { DetailsAction, DetailsTypes, IDetailsState } from '../types/detailsTypes';

const INITIAL_STATE: IDetailsState = {
  loading: false,
  info: null,
  error: null,
};

export const pokemonDetailsReducer = (
  state = INITIAL_STATE,
  action: DetailsAction,
): IDetailsState => {
  switch (action.type) {
    case DetailsTypes.FETCH_POKEMON_DETAILS_START:
      return { loading: true, info: null, error: null };

    case DetailsTypes.FETCH_POKEMON_DETAILS_SUCCESS:
      return { ...INITIAL_STATE, info: action.payload };

    case DetailsTypes.FETCH_POKEMON_DETAILS_FAILURE:
      return { loading: true, info: null, error: action.payload };

    default:
      return state;
  }
};
