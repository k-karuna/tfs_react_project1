import { combineReducers } from 'redux';

import accounts from './accounts/reducer';
import operations from './operations/reducer';

export default combineReducers({
  accountsStore: accounts,
  operationsStore: operations,
});
