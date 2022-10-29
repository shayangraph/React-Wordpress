import { load } from "./loader";
import { role } from "./role";
import { login } from "./login";

const { combineReducers } = require("redux");

const reducers = combineReducers({
  loader: load,
  role: role,
  login: login,
});
export default reducers;
