import React from 'react';
import MaskedInput from 'react-maskedinput';
import cn from 'classnames';
import Button from '../Button/Button';

import styles from './NewAccountForm.module.css';
import cardDataValid from '../../utils/cardDataValid';

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

    if (
      !cardDataValid(this.state.cardNumber, this.state.year, this.state.month)
    )
      return;

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
              pattern="0[1-9]|1[0-2]"
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
              pattern="[22-99]*"
              className={cn(styles.input, styles.inputDate)}
            />
          </div>
          <Button type="submit">Привязать</Button>
        </div>
      </form>
    );
  }
}
