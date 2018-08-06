import React from "react";

const Transaction = ({ transaction, account }) => {
  return (
    <div>
      <p>{transaction.description}</p>
      <p>{transaction.amount}</p>
      <p>{account.name}</p>
    </div>
  );
};

export default Transaction;

/*TODO:
  how should a single transaction be loaded?
  There should be a table format to view many transactions all at once, and then also a list view to limit the number of transactions that are shown
  Should it just be a UI state that changes the transaction/transactionList components to show either a table or a list?
  Also the transaction should have a detailed view which shows more information about the transaction
*/
