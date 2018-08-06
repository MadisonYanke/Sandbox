import { combineReducers } from "redux";
import accountReducer from "./containers/account/reducer";
import transactionReducer from "./containers/transaction/reducer";

const rootReducer = combineReducers({
  account: accountReducer,
  transaction: transactionReducer
});

export default rootReducer;
