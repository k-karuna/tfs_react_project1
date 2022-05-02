import {
  LOAD_OPERATIONS,
  LOAD_OPERATIONS_FAILURE,
  LOAD_OPERATIONS_SUCCESS,
} from './actions';

const initialState = {
  operations: [],
  isLoading: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_OPERATIONS:
      return {
        ...state,
        isLoading: true,
      };
    case LOAD_OPERATIONS_FAILURE:
      return {
        ...state,
        isLoading: false,
      };
    case LOAD_OPERATIONS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        operations: action.payload.operations,
      };
    default:
      return state;
  }
}
