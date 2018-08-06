import React from "react";
import Account from "./Account";

const AccountList = ({ accounts, addAccount, toggleAccount }) => {
  if (accounts != null) {
    return Object.values(accounts).map(account => {
      return (
        <Account
          onClick={() => toggleAccount(account.id)}
          key={account.id}
          account={account}
        />
      );
    });
  } else {
    return (
      <div>
        <h4>There are no accounts to display.</h4>
        <h4>Get started by adding an account.</h4>
      </div>
    );
  }
};

export default AccountList;
