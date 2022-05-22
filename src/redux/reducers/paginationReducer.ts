import {
  IPaginationState,
  PaginationActionType,
  PaginationActionTypes,
} from '../types/paginationTyps';

const PAGINATION_STATE: IPaginationState = {
  previous: null,
  next: null,
};

export const paginationReducer = (
  state = PAGINATION_STATE,
  action: PaginationActionType,
): IPaginationState => {
  switch (action.type) {
    case PaginationActionTypes.FETCH_PAGINATION:
      return { previous: action.payload.previous, next: action.payload.next };

    default:
      return state;
  }
};
