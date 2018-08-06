import React from "react";
import { connect } from "react-redux";
import uuidv1 from "uuid";

import { addTransaction } from "./actions";
import ITransaction from "../../dataDefinitions/transaction";

const mapDispatchToProps = dispatch => ({
  addTransaction: transaction => dispatch(addTransaction(transaction))
});

const mapStateToProps = state => ({
  accounts: state.account.accounts
});

class AddTransaction extends React.Component {
  constructor() {
    super();

    this.state = {
      transaction: new ITransaction()
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      transaction: {
        ...this.state.transaction,
        [event.target.id]: event.target.value
      }
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    if (
      this.state.transaction.account == null ||
      this.state.transaction.amount == null
    ) {
      alert("You must enter an account and an amount");
    } else {
      const transaction = {
        ...this.state.transaction,
        id: uuidv1(),
        amount: parseFloat(this.state.transaction.amount)
      };
      this.props.addTransaction(transaction);
      this.setState({
        transaction: new ITransaction()
      });
    }
  }

  render() {
    const transaction = this.state.transaction;
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="description">Transaction Description</label>
          <input
            type="text"
            className="form-control"
            id="description"
            value={transaction.description}
            onChange={this.handleChange}
          />
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            className="form-control"
            id="amount"
            value={transaction.amount}
            onChange={this.handleChange}
          />
          <label htmlFor="account">Account</label>
          <select
            className="form-control"
            id="account"
            onChange={this.handleChange}
          >
            <option value>-- select an option --</option>
            {Object.values(this.props.accounts).map(account => {
              return (
                <option key={account.id} id="account" value={account.id}>
                  {account.name}
                </option>
              );
            })}
          </select>
        </div>
        <button type="submit" className="btn btn-success btn-lg">
          SAVE
        </button>
      </form>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddTransaction);
