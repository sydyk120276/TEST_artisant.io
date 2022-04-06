export interface UserState {
  products: any[];
  loading: boolean;
  error: null | string;
  page: number;
  limit: number;
  totalCount: number;
}

export enum UserActionTypes {
  FETCH_USERS = "FETCH_USERS",
  FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS",
  FETCH_USERS_ERROR = "FETCH_USERS_ERROR",
  SET_CURRENT_PAGE = "SET_CURRENT_PAGE",
}

interface FetchUserAction {
  type: UserActionTypes.FETCH_USERS;
}

interface FetchUserSuccessAction {
  type: UserActionTypes.FETCH_USERS_SUCCESS;
  payload: any[];
  totalCount: number
}

interface FetchUserErrorAction {
  type: UserActionTypes.FETCH_USERS_ERROR;
  payload: string;
}

interface FetchUserCurrentPageAction {
  type: UserActionTypes.SET_CURRENT_PAGE;
  payload: number;
}

export type UserAction =
  | FetchUserAction
  | FetchUserSuccessAction
  | FetchUserErrorAction
  | FetchUserCurrentPageAction;
