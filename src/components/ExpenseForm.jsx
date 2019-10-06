import React, { Component } from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import { toast } from 'react-toastify';

import Form from './shared/Form';
import Label from './shared/Label';
import Input from './shared/Input';
import Button from './shared/Button';

const labelStyles = `
  margin-bottom: 16px;  
`;

export default class ExpenseForm extends Component {
  state = {
    name: '',
    amount: '',
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = e => {
    const { name, amount } = this.state;
    e.preventDefault();

    if (!name || !amount) {
      toast.warn('Please, enter valid name and amount of money');
      return;
    }
    if (Number(amount) < 0 || Number(amount) === 0) {
      toast.warn('Please, enter valid amount of money');
      return;
    }
    this.props.onSave({
      name,
      amount: Number(amount),
      id: shortid.generate(),
    });

    this.setState({ name: '', amount: 0 });
  };

  render() {
    const { name, amount } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <Label customStyles={labelStyles}>
          Enter expense name
          <Input
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
          />
        </Label>
        <Label customStyles={labelStyles}>
          Enter expense amount
          <Input
            type="number"
            name="amount"
            value={amount}
            onChange={this.handleChange}
          />
        </Label>

        <Button label="Add" type="submit" />
      </Form>
    );
  }
}

ExpenseForm.propTypes = {
  onSave: PropTypes.func.isRequired,
};
