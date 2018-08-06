import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

import rootReducer from "./reducer";
import SelectableAccountList from "./containers/account/SelectableAccountList";
import AddAccount from "./containers/account/AddAccount";
import AddTransaction from "./containers/transaction/AddTransaction";
import TransactionList from "./containers/transaction/TransactionList";

import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import "./styles.css";

Enzyme.configure({ adapter: new Adapter() });

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

function App() {
  return (
    <div className="App">
      <SelectableAccountList />
      <AddAccount />
      <TransactionList />
      <AddTransaction />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
