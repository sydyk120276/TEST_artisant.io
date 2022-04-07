export interface ProductState {
  products: any[];
  fiteredProduct: any[];
  loading: boolean;
  error: null | string;
  page: number;
  limit: number;
  totalCount: number;
}

export enum ProductActionTypes {
  FETCH_PRODUCTS = "FETCH_PRODUCTS",
  FETCH_PRODUCTS_SUCCESS = "FETCH_PRODUCTS_SUCCESS",
  FETCH_PRODUCTS_ERROR = "FETCH_PRODUCTS_ERROR",
  SET_CURRENT_PAGE = "SET_CURRENT_PAGE",
  SORT_PRODUCT = "SORT_PRODUCT",
}

interface FetchProductAction {
  type: ProductActionTypes.FETCH_PRODUCTS;
}

interface FetchProductSuccessAction {
  type: ProductActionTypes.FETCH_PRODUCTS_SUCCESS;
  payload: any[];
  totalCount: number;
}
interface FetchProductSortSuccessAction {
  type: ProductActionTypes.SORT_PRODUCT;
  totalCount: number;
  fiteredProduct: any[];
}

interface FetchProductErrorAction {
  type: ProductActionTypes.FETCH_PRODUCTS_ERROR;
  payload: string;
}

interface FetchProductCurrentPageAction {
  type: ProductActionTypes.SET_CURRENT_PAGE;
  payload: number;
}

export type ProductAction =
  | FetchProductAction
  | FetchProductSuccessAction
  | FetchProductErrorAction
  | FetchProductSortSuccessAction
  | FetchProductCurrentPageAction;
