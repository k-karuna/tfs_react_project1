import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Board from './components/Board/Board';
import TimelinePage from './pages/TimelinePage';
import NotFoundPage from './pages/NotFoundPage';

import styles from './App.module.css';

import {
  loadAccounts,
  loadAccountsSuccess,
  loadAccountsFailure,
} from './redux/accounts/actions';

import AddNewCardPage from './pages/AddNewCardPage';
import { getAccounts } from './services/requestMock';

const App: React.FC<any> = (props) => {
  const renderTimelinePage = (routeProps) => (
    <TimelinePage {...routeProps} accounts={props.accounts} />
  );

  // const renderAddNewCardPage = (routeProps) => (
  //   <AddNewCardPage {...routeProps} handleSubmit={handleSubmit} />
  // );

  // const handleSubmit = (newAccount) => props.addAccount(newAccount);

  useEffect(() => {
    props.loadAccounts();
    getAccounts()
      .then((accounts) => props.loadAccountsSuccess(accounts))
      .catch(() => props.loadAccountsFailure());
  }, []);

  return (
    <Router>
      <Board accounts={props.accounts} />
      <div className={styles.pageContent}>
        <Switch>
          <Route path="/account/:accountId" render={renderTimelinePage} />
          <Route path="/actions/add_card" component={AddNewCardPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </Router>
  );
};

const mapStateToProps = (state) => ({
  accounts: state.accountsStore.accounts,
  isLoading: state.accountsStore.isLoading,
});

const mapDispatchToProps = {
  loadAccounts: loadAccounts,
  loadAccountsSuccess: loadAccountsSuccess,
  loadAccountsFailure: loadAccountsFailure,
  // addAccount,
};

export { App };
export default connect(mapStateToProps, mapDispatchToProps)(App);
