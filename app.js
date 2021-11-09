function Account(accountName, initialBalance) {
  this.accountName = accountName;
  this.balance = initialBalance;
  this.deposit = function () {
    this.balance += this.balance;
  }

}
Account.prototype.withdraw = function (amount) {
  this.balance -= amount
}
Account.prototype.bank = "Bank of America"
const account = new Account("sait", 500)
console.log(account);
console.dir(account.__proto__.__proto__);