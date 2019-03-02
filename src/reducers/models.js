import {ADD_MODEL} from "../actions/models";

export default (state = [], action = {}) => {
  switch (action.type) {
    case ADD_MODEL:
      if (action.payload.name)
        return [...state, action.payload]
      return state

    default:
      return state
  }
}