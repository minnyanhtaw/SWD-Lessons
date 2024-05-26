// class Person {
//   constructor(name, age, gender) {
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
//     this.prefix = this.gender === "male" ? "Mr." : "Ms.";
//   }
//   intro() {
//     return `I'm ${this.prefix} ${this.name} and ${this.age} years old.`;
//   }
// }

// // const person = new Person("Min Nyan Htaw", 18, "male");
// // console.log(person.intro());

// class Student extends Person {
//   constructor(name, age, gender, major) {
//     super(name, age, gender);
//     this.major = major;
//   }
// }

// // const st1 = new Student("Mg Mg", 15, "male", "SWD");
// // console.log(st1);
// // console.log(st1.intro());

// class Monitor extends Student {
//   constructor(name, age, gender, major, room) {
//     super(name, age, gender, major);
//     this.room = room;
//   }

//   #a = "aaa";
//   c = "ccc";
//   #b() {
//     return "method b";
//   }

//   static x = "xxx";
//   static y = "yyy";
//   static z() {
//     return "method z";
//   }
// }

// console.dir(Monitor);
// console.log(Monitor.x);

// const m1 = new Monitor("zaw zaw", 16, "male", "SWD", "room 1");
// console.log(m1.c);
// console.log(m1.name);

// // console.log(m1.intro());

// console.log(Date);
// console.dir(Date);

class BankAccount {
  #balance = 0;
  #record = [];
  #recordIndex = 0;

  
  constructor(number, name) {
    this.number = number;
    this.name = name;
  }

  checkBalance() {
    return this.#balance;
  }

  history() {
    return this.#record;
  }

  deposit(amount) {
    this.#balance += amount;
    this.#record[this.#recordIndex++] = "Deposit " + amount;
    return "Deposit " + amount;
  }


  withdraw(amount) {
    if (amount > this.#balance) {
        this.#record[this.#recordIndex++]
      return "Not Enough Money";
    } else {
      this.#balance -= amount;
      this.#record[this.#recordIndex++] = "Withdraw " + amount;
      return "Withdraw " + amount;
    }
  }
}

const ba = new BankAccount(123123, "Min Nyan Htaw");
console.log(ba);
console.log(ba.deposit(50000));
console.log(ba.checkBalance());
console.log(ba.withdraw(30000));
console.log(ba.checkBalance());
console.log(ba.withdraw(50000));
console.log(history);
console.log(ba.deposit(100000));
console.table(ba.history());
