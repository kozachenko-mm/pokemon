import { IPokemonItems } from '../../types';

export interface IListState {
  loading: boolean;
  list: IPokemonItems[];
  error: null | object;
  previous: string;
  next: string;
}

export enum ListTypes {
  FETCH_POKEMONS_LIST_START = 'FETCH_POKEMONS_LIST_START',
  FETCH_POKEMONS_LIST_SUCCESS = 'FETCH_POKEMONS_LIST_SUCCESS',
  FETCH_POKEMONS_LIST_FAILURE = 'FETCH_POKEMONS_LIST_FAILURE',
  FETCH_PAGINATION = 'FETCH_PAGINATION'
}
interface ListStartAction {
  type: ListTypes.FETCH_POKEMONS_LIST_START;
}
export interface ListFetchSuccessAction {
  type: ListTypes.FETCH_POKEMONS_LIST_SUCCESS;
  payload: any[];
}
interface ListFetchFailureAction {
  type: ListTypes.FETCH_POKEMONS_LIST_FAILURE;
  payload: object;
}
interface FetchPaginationAction {
  type: ListTypes.FETCH_PAGINATION;
  payload: { previous: string; next: string };
}

export type ListAction =
  | ListStartAction
  | ListFetchSuccessAction
  | ListFetchFailureAction
  | FetchPaginationAction;
