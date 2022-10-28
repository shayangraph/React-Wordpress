import { load } from "./loader";

const { combineReducers } = require("redux");

const reducers = combineReducers({
    loader:load
});
export default reducers;
