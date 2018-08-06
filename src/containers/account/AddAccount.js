import React from "react";
import { connect } from "react-redux";
import uuidv1 from "uuid";
import { addAccount } from "./actions";
import IAccount from "../../dataDefinitions/account";

const mapDispatchToProps = dispatch => ({
  addAccount: account => dispatch(addAccount(account))
});

class AddAccount extends React.Component {
  constructor() {
    super();

    this.state = {
      account: new IAccount()
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      account: { ...this.state.account, [event.target.id]: event.target.value }
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const account = {
      ...this.state.account,
      id: uuidv1(),
      initialBalance: parseFloat(this.state.account.initialBalance)
    };
    this.props.addAccount(account);
    this.setState({
      account: new IAccount()
    });
  }

  render() {
    const account = this.state.account;
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Account Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={account.name}
            onChange={this.handleChange}
          />
          <label htmlFor="initialBalance">Initial Balance</label>
          <input
            type="number"
            className="form-control"
            id="initialBalance"
            value={account.initialBalance}
            onChange={this.handleChange}
          />
          <label htmlFor="color">Color</label>
          <input
            type="text"
            className="form-control"
            id="color"
            value={account.color}
            onChange={this.handleChange}
          />
        </div>
        <button type="submit" className="btn btn-success btn-lg">
          SAVE
        </button>
      </form>
    );
  }
}

export default connect(
  null,
  mapDispatchToProps
)(AddAccount);
