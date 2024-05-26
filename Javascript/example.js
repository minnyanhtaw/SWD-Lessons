class BankAccount {
  #balance = 0;
  #record = [];
  #recordIndex = 0;
  constructor(number, name) {
    this.number = number;
    this.name = name;
  }

  histroy() {
    return this.#record;
  }

  checkBalance() {
    return this.#balance;
  }

  //setter
  deposit(amount) {
    this.#balance += amount;
    this.#record[this.#recordIndex++] = "Deposit " + amount;
    return "Deposit " + amount;
  }

  withdraw(amount) {
    if (amount <= this.#balance) {
      this.#balance -= amount;
      this.#record[this.#recordIndex++] = "Withdraw " + amount;
      return "Withdraw " + amount;

    } else {
      this.#record[this.#recordIndex++] = "Unsuccessful!";
      return "Not enough amount!";
    }
  }
}

const ba = new BankAccount(1234, "Min Nyan Htaw", 50000);
console.log(ba);
console.log(ba.checkBalance());
console.log(ba.deposit(4000));
console.log(ba.checkBalance());
console.log(ba.withdraw(6000));
console.log(ba.checkBalance());
console.log(ba.deposit(50000));
console.table(ba.histroy())
