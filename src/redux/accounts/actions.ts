export const LOAD_ACCOUNTS = 'LOAD_ACCOUNTS';
export const LOAD_ACCOUNTS_FAILURE = 'LOAD_ACCOUNTS_FAILURE';
export const LOAD_ACCOUNTS_SUCCESS = 'LOAD_ACCOUNTS_SUCCESS';
export const CHANGE_ACCOUNT_TITLE = 'CHANGE_ACCOUNT_TITLE';
export const ADD_ACCOUNT = 'ADD_ACCOUNT';
export const REMOVE_EXTERNAL_ACCOUNT = 'REMOVE_EXTERNAL_ACCOUNT';

export const loadAccounts = () => ({
  type: LOAD_ACCOUNTS,
});

export const loadAccountsFailure = () => ({
  type: LOAD_ACCOUNTS_FAILURE,
});

export const loadAccountsSuccess = (accounts) => ({
  type: LOAD_ACCOUNTS_SUCCESS,
  payload: {
    accounts: accounts,
  },
});

export const changeAccountTitle = (accountId, newTitle) => ({
  type: CHANGE_ACCOUNT_TITLE,
  payload: {
    accountId,
    newTitle,
  },
});

export const addAccount = (account) => ({
  type: ADD_ACCOUNT,
  payload: {
    account,
  },
});

export const removeExternalAccount = (accountId) => ({
  type: REMOVE_EXTERNAL_ACCOUNT,
  payload: {
    accountId,
  },
});
