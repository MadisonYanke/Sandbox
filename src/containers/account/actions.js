export const ADD_ACCOUNT = "ADD_ACCOUNT";
export const TOGGLE_ACCOUNT = "TOGGLE_ACCOUNT";

export function addAccount(account) {
  return {
    type: ADD_ACCOUNT,
    account
  };
}

export function toggleAccount(id) {
  return {
    type: TOGGLE_ACCOUNT,
    id
  };
}
