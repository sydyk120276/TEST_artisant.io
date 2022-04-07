import { combineReducers } from "redux";

import { ProductReducer } from "./productReducer";

export const rootReducer = combineReducers({
  product: ProductReducer,
});

export type RootState = ReturnType<typeof rootReducer>