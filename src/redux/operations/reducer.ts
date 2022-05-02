import {
  LOAD_OPERATIONS,
  LOAD_OPERATIONS_FAILURE,
  LOAD_OPERATIONS_SUCCESS,
} from "./actions";

const initialState = [];

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_OPERATIONS:
      return null;
    case LOAD_OPERATIONS_FAILURE:
      return null;
    case LOAD_OPERATIONS_SUCCESS:
      return [...action.payload.operations];
    default:
      return state;
  }
}
