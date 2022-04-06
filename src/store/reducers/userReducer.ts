import { UserAction, UserActionTypes, UserState } from "../../types/product";

const initialState: UserState = {
  products: [],
  loading: false,
  error: null,
  page: 1,
  limit: 10,
  totalCount: 0,
};

export const userReducer = (state = initialState, action: UserAction): UserState => {
  switch (action.type) {
    case UserActionTypes.FETCH_USERS:
      return {
        loading: true,
        error: null,
        products: [],
        page: 1,
        limit: 10,
        totalCount: 0,
      };
    case UserActionTypes.FETCH_USERS_SUCCESS:
      return { ...state, loading: false, error: null, products: action.payload, totalCount: action.totalCount };
    case UserActionTypes.FETCH_USERS_ERROR:
      return { ...state, loading: false, error: action.payload };
    case UserActionTypes.SET_CURRENT_PAGE:
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