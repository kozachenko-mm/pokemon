import { IPokemonItems } from '../../types';

export interface IDetailsState {
  loading: boolean;
  info: IPokemonItems | null;
  error: { data?: string } | null;
}

export enum DetailsTypes {
  FETCH_POKEMON_DETAILS_START = 'FETCH_POKEMON_DETAILS_START',
  FETCH_POKEMON_DETAILS_SUCCESS = 'FETCH_POKEMON_DETAILS_SUCCESS',
  FETCH_POKEMON_DETAILS_FAILURE = 'FETCH_POKEMON_DETAILS_FAILURE'
}

interface DetailsStartAction {
  type: DetailsTypes.FETCH_POKEMON_DETAILS_START;
}
interface DetailsFetchSuccessAction {
  type: DetailsTypes.FETCH_POKEMON_DETAILS_SUCCESS;
  payload: IPokemonItems;
}

interface DetailsFetchFailureAction {
  type: DetailsTypes.FETCH_POKEMON_DETAILS_FAILURE;
  payload: object;
}
export type DetailsAction =
  | DetailsStartAction
  | DetailsFetchSuccessAction
  | DetailsFetchFailureAction;
