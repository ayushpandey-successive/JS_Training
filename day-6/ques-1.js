//Problem Statement: Create a class BankAccount with properties balance and owner and methods deposit(), withdraw(), and displayBalance().

class BankAccount {
  constructor(balance, owner) {
    this.balance = balance;
    this.owner = owner;
  }
  displayBalance() {
    console.log(`Balance: ${this.balance}`);
  }

  deposit(amount) {
    console.log(`Depositing ${amount}`);
    this.balance += amount;
    this.displayBalance();
  }

  withdraw(amount) {
    console.log(`Withdrawing ${amount}`);
    this.balance -= amount;
    this.displayBalance();
  }
}

let account = new BankAccount(1000, "Ayush Pandey");

account.deposit(100);
account.withdraw(50);
account.displayBalance();
