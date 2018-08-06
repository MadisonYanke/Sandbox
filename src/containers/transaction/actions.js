export const ADD_TRANSACTION = "ADD_TRANSACTION";

export function addTransaction(transaction) {
  return {
    type: ADD_TRANSACTION,
    transaction
  };
}
