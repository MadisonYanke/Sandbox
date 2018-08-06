const transactionReducer = (state = { transaction: {} }, action) => {
  switch (action.type) {
    case "ADD_TRANSACTION":
      return {
        ...state,
        transactions: {
          ...state.transactions,
          [action.transaction.id]: action.transaction
        }
      };
    default:
      return state;
  }
};

export default transactionReducer;
