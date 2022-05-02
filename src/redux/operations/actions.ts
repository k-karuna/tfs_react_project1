export const LOAD_OPERATIONS = 'LOAD_OPERATIONS';
export const LOAD_OPERATIONS_FAILURE = 'LOAD_OPERATIONS_FAILURE';
export const LOAD_OPERATIONS_SUCCESS = 'LOAD_OPERATIONS_SUCCESS';

export const loadOperations = () => ({
  type: LOAD_OPERATIONS,
});

export const loadOperationsFailure = () => ({
  type: LOAD_OPERATIONS_FAILURE,
});

export const loadOperationsSuccess = (operations) => ({
  type: LOAD_OPERATIONS_SUCCESS,
  payload: {
    operations,
  },
});
