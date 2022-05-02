import React from 'react';
import withTitle from '../decorators/withTitle';

import NewAccountForm from '../components/NewAccountForm/NewAccountForm';
import { connect } from 'react-redux';
import { addAccount } from '../redux/accounts/actions';

const AddNewCardPage: React.FC<any> = (props) => (
  <>
    <h2>Привязка банковской карты</h2>
    <NewAccountForm handleSubmit={props.addAccount} />
  </>
);

const mapDispatchProps = {
  addAccount: addAccount,
};

export default withTitle(() => 'Добавить карту')(
  connect(null, mapDispatchProps)(AddNewCardPage)
);
