export interface IPaginationState {
  previous: null | string;
  next: null | string;
}

export enum PaginationActionTypes {
  FETCH_PAGINATION = 'FETCH_PAGINATION'
}
interface FetchPaginationAction {
  type: PaginationActionTypes.FETCH_PAGINATION;
  payload: IPaginationState;
}
export type PaginationActionType = FetchPaginationAction;
