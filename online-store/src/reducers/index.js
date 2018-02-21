import { combineReducers } from "redux";
import productReducer from "./products";
import userReducer from "./users";
const rootReducer = combineReducers({
  productsState: productReducer,
  usersState: userReducer
});
export default rootReducer;
