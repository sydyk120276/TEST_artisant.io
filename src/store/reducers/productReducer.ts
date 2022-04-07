import { ProductAction, ProductActionTypes, ProductState } from "../../types/product";

const initialState: ProductState = {
  products: [],
  fiteredProduct: [],
  loading: false,
  error: null,
  page: 1,
  limit: 10,
  totalCount: 0,
};

export const ProductReducer = (state = initialState, action: ProductAction): ProductState => {
  switch (action.type) {
    case ProductActionTypes.FETCH_PRODUCTS:
      return {
        loading: true,
        error: null,
        products: [],
        page: 1,
        limit: 10,
        totalCount: 0,
        fiteredProduct: [],
      };
    case ProductActionTypes.FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        products: action.payload,
        totalCount: action.totalCount,
      };
    case ProductActionTypes.SORT_PRODUCT:
      return {
        ...state,
        loading: false,
        error: null,
        totalCount: action.totalCount,
        fiteredProduct: action.fiteredProduct,
      };
    case ProductActionTypes.FETCH_PRODUCTS_ERROR:
      return { ...state, loading: false, error: action.payload };
    case ProductActionTypes.SET_CURRENT_PAGE:
      return { ...state, page: action.payload };
    default:
      return state;
  }
};

export function createPages(
  pages: any[],
  totalCount: number,
  currentPage: number
): any {
  if (totalCount > 10) {
    if (currentPage > 8) {
      for (let i = currentPage - 4; i <= currentPage + 5; i += 1) {
        pages.push(i);
        if (i === totalCount) break;
      }
    } else {
      for (let i = 1; i <= 10; i += 1) {
        pages.push(i);
        if (i === totalCount) break;
      }
    }
  } else {
    for (let i = 1; i <= totalCount; i += 1) {
      pages.push(i);
    }
  }
}

