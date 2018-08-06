import React from "react";
import { connect } from "react-redux";

import Transaction from "../../components/transaction/Transaction";

const mapStateToProps = state => ({
  accounts: state.account.accounts,
  transactions: state.transaction.transactions
});

class TransactionList extends React.Component {
  render() {
    if (this.props.transactions != null) {
      return (
        <div>
          {Object.values(this.props.transactions).map(transaction => {
            const account = this.props.accounts[transaction.account];
            if (account.selected) {
              return (
                <Transaction
                  key={transaction.id}
                  transaction={transaction}
                  account={account}
                />
              );
            } else {
              return null;
            }
          })}
        </div>
      );
    } else {
      return null;
    }
  }
}

export default connect(mapStateToProps)(TransactionList);
