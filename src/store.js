import { createStore } from "redux";
import counterReducer from "./reducers/counter";

let store = createStore(
    counterReducer
)

export default store;