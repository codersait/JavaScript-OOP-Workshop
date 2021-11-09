class Account {
  static numOfAccounts = 0;
  #bank = "Bank of America";
  #accountName;
  #balance
  constructor(accountName, initialBalance) {
    this.#accountName = accountName;
    this.#balance = initialBalance;
    Account.numOfAccounts++;
  }

  deposit(amount) {
    this.balance += amount;
  }

  withdraw(amount) {
    this.balance -= amount;
  }

  get accountName() {
    return this.#accountName;
  }
  get balance() {
    return this.#balance;
  }
  set accountName(accountName) {
    return this.#accountName = accountName;
  }
  set balance(balance) {
    return this.#balance = balance;
  }

  toString() {
    return `${this.accountName} has ${this.balance}$.`
  }
}
class SpecialAccount extends Account {
  #specialCode;
  constructor(accountName, initialBalance, specialCode) {
    super(accountName, initialBalance);
    this.specialCode = specialCode
  }

}

const special = new SpecialAccount("sait", 500, "404")
console.log(special);