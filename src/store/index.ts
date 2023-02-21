import { createStore, combineReducers } from "redux";
import usersReducer from "./Users/users.reducer";

const rootReducer = combineReducers({
  Users: usersReducer,
});

const store = createStore(rootReducer);

export default store;
