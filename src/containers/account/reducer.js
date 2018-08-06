const accountReducer = (state = { accounts: {} }, action) => {
  switch (action.type) {
    case "ADD_ACCOUNT":
      return {
        ...state,
        accounts: {
          ...state.accounts,
          [action.account.id]: {
            ...action.account,
            balance: action.account.initialBalance
          }
        }
      };
    case "TOGGLE_ACCOUNT":
      var toggleAccount = state.accounts[action.id];
      toggleAccount.selected = !toggleAccount.selected;
      return {
        ...state,
        accounts: { ...state.accounts, [action.id]: toggleAccount }
      };
    case "ADD_TRANSACTION":
      let balanceChange = 0.0;
      for (let transaction in state.transactions) {
        balanceChange += transaction.amount;
      }
      balanceChange += action.transaction.amount;
      var changeAccount = state.accounts[action.transaction.account];
      changeAccount.balance = changeAccount.initialBalance + balanceChange;
      return {
        ...state,
        accounts: {
          ...state.accounts,
          [action.transaction.account]: changeAccount
        }
      };
    default:
      return state;
  }
};

export default accountReducer;
