import React from "react";
import "./styles.css";

const Account = ({ account, onClick }) => {
  var selectStyle = {};
  if (account.selected) {
    selectStyle.backgroundColor = account.color;
  } else {
    selectStyle.backgroundColor = "gray";
  }
  return (
    <div onClick={onClick} style={selectStyle}>
      <p>{account.name}</p>
      <p>{account.balance}</p>
    </div>
  );
};

export default Account;
