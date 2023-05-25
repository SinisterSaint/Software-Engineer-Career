import { LOAD_PERSON, RESET_ALL } from "../actions/types";

const INITIAL_STATE = {};


function people(state = INITIAL_STATE, action) {
  switch (action.type) {
    case RESET_ALL:
      return { ...INITIAL_STATE };

    case LOAD_PERSON:
      return {
        ...state,
        [action.payload.id]: { ...action.payload }
      };

    default:
      return state;
  }
}

export default people;