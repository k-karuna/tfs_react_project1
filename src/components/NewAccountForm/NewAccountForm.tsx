import React from 'react';
import MaskedInput from 'react-maskedinput';
import cn from 'classnames';
import Button from '../Button/Button';

import styles from './NewAccountForm.module.css';

export default class NewAccountForm extends React.Component<any, any> {
  constructor(props) {
    super(props);

    this.state = {
      cardNumber: '',
      year: '',
      month: '',
    };
  }

  clearForm() {
    this.setState({
      cardNumber: '',
      year: '',
      month: '',
    });
  }

  handleFormSubmit = (event) => {
    event.preventDefault();

    const charArray = this.state.cardNumber.split('');

    if (charArray.some((ch) => isNaN(ch))) return;

    if (charArray.length !== 19) return;
    if (this.state.year.length !== 2) return;
    if (this.state.month.length !== 2) return;

    this.props.handleSubmit({
      id: Date.now(),
      type: 'external',
      title: `Привязанная карта *${this.state.cardNumber.substr(15, 4)}`,
    });
    this.clearForm();
  };

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <h2>Привязка банковской карты</h2>
        <div className={styles.cardForm}>
          <MaskedInput
            mask="1111 1111 1111 1111"
            name="cardNumber"
            value={this.state.cardNumber}
            onChange={this.handleInputChange}
            placeholder="Номер карты"
            className={styles.input}
          />
          <div className={styles.label}>VALID THRU</div>
          <div className={styles.validThruFieldset}>
            <MaskedInput
              mask="11"
              type="text"
              name="month"
              value={this.state.month}
              onChange={this.handleInputChange}
              placeholder="MM"
              className={cn(styles.input, styles.inputDate)}
            />
            /
            <MaskedInput
              mask="11"
              type="text"
              name="year"
              value={this.state.year}
              onChange={this.handleInputChange}
              placeholder="YY"
              className={cn(styles.input, styles.inputDate)}
            />
          </div>
          <Button type="submit">Привязать</Button>
        </div>
      </form>
    );
  }
}
