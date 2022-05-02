import {
  LOAD_ACCOUNTS,
  LOAD_ACCOUNTS_SUCCESS,
  LOAD_ACCOUNTS_FAILURE,
  ADD_ACCOUNT,
} from './actions';

const initialState = {
  accounts: [],
  isLoading: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_ACCOUNTS: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case LOAD_ACCOUNTS_SUCCESS: {
      const { accounts } = action.payload;
      return {
        ...state,
        accounts: accounts,
        isLoading: false,
      };
    }

    case LOAD_ACCOUNTS_FAILURE: {
      return {
        ...state,
        isLoading: false,
      };
    }

    case ADD_ACCOUNT: {
      const { account } = action.payload;
      return {
        ...state,
        accounts: [...state.accounts, account],
      };
    }

    default:
      return state;
  }
}
