import { combineReducers } from "redux";
import films from "./films";
import planets from "./planets";
import people from "./people";

export default combineReducers({
  films,
  planets,
  people,
});