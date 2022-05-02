import React from "react";
import withTitle from "../decorators/withTitle";
import NewAccountForm from "../components/NewAccountForm/NewAccountForm";

const AddNewCardPage: React.FC<any> = (props) => (
  <>
    <h2>Привязка банковской карты</h2>
    <NewAccountForm handleSubmit={props.addAccount} />
  </>
);

export default withTitle(() => "Добавить карту")(AddNewCardPage);
