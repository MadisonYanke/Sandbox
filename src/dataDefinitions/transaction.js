class ITransaction {
  constructor(accountId) {
    this.id = "";
    this.description = "";
    this.date = new Date();
    this.account = accountId;
    this.amount = 0;
  }
}

export default ITransaction;
