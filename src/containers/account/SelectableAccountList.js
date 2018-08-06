import { connect } from "react-redux";
import AccountList from "../../components/account/AccountList";
import { toggleAccount } from "./actions";

const mapStateToProps = state => ({
  accounts: state.account.accounts
});

const mapDispatchToProps = dispatch => ({
  toggleAccount: id => dispatch(toggleAccount(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AccountList);
