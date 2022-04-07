import { combineReducers } from "redux";

import { userReducer } from "./productReducer";

export const rootReducer = combineReducers({
  user: userReducer
})

export type RootState = ReturnType<typeof rootReducer>