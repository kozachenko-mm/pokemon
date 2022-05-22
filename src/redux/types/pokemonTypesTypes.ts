import { ListFetchSuccessAction } from './listTypes';

export interface ITypesState {
  error: null | object;
  types: any[];
}
export enum TypesTypes {
  FETCH_POKEMON_TYPES_SUCCESS = 'FETCH_POKEMON_TYPES_SUCCESS',
  FETCH_POKEMON_TYPES_FAILURE = 'FETCH_POKEMON_TYPES_FAILURE'
}
interface TypesFetchSuccess {
  type: TypesTypes.FETCH_POKEMON_TYPES_SUCCESS;
  payload: any[];
}

interface TypesFetchFailure {
  type: TypesTypes.FETCH_POKEMON_TYPES_FAILURE;
  payload: object;
}

export type TypesAction = TypesFetchSuccess | TypesFetchFailure | ListFetchSuccessAction;
