import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Routes, Route, Outlet, Link } from "react-router-dom";

import Board from "./components/Board/Board";
import TimelinePage from "./pages/TimelinePage";
import NotFoundPage from "./pages/NotFoundPage";

import styles from "./App.module.css";

import {
  loadAccounts,
  loadAccountsSuccess,
  loadAccountsFailure,
  addAccount,
} from "./redux/accounts/actions";

import AddNewCardPage from "./pages/AddNewCardPage";
import { getAccounts } from "./services/requestMock";

const App: React.FC<any> = (props) => {
  useEffect(() => {
    props.loadAccounts();
    getAccounts()
      .then((accounts) => props.loadAccountsSuccess(accounts))
      .catch(() => props.loadAccountsFailure());
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout {...props} />}>
          <Route path="account">
            <Route
              path=":accountId"
              element={<TimelinePage {...props} accounts={props.accounts} />}
            />
          </Route>
          <Route path="actions">
            <Route
              path="add_card"
              element={
                <AddNewCardPage {...props} handleSubmit={props.addAccount} />
              }
            />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
};

function Layout(props) {
  return (
    <>
      <Board accounts={props.accounts} />
      <div className={styles.pageContent}>
        <Outlet />
      </div>
    </>
  );
}

const mapStateToProps = function (state) {
  return {
    accounts: state.accounts,
  };
};

const mapDispatchToProps = {
  loadAccounts: loadAccounts,
  loadAccountsSuccess: loadAccountsSuccess,
  loadAccountsFailure: loadAccountsFailure,
  addAccount,
};

export { App };
export default connect(mapStateToProps, mapDispatchToProps)(App);
