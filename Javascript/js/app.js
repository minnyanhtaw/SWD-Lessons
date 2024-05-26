// function run() {
//   console.log("*");
//   console.log("* *");
//   console.log("* * *");
//   return "triangle";
// }

// console.log(run());

// function findBirthYear(currentAge = 0, name = "my test") {
//   const currentYear = 2024;
//   const birthYear = currentYear - currentAge;
//   return `${name} was born in ${birthYear}`;
// }

// console.log(findBirthYear(18, "Min Nyan Htaw"));
// console.log(findBirthYear(3, "Mg Mg"));
// console.log(findBirthYear(5, "Su Su"));
// console.log(findBirthYear(23, "Hla Hla"));

// console.log(findBirthYear());

// function area(width = 0, breadth = 0) {
//   const result = width * breadth;
//   return `width ${width}ft * breadth ${breadth} = ${result}sqft`;
// }

// console.log(area(17, 60));
// console.log(area(17, 50));
// console.log(area(25, 50));
// console.log(area());

// const arr = [];
// const obj = {};
// console.log(typeof arr);

// console.log(typeof obj);

// const fruits = ["apple","orange","banana","lemon"];

// console.log(fruits);
// console.log(typeof fruits);

// console.log(fruits[2]);
// console.log(fruits[3]);
// console.log(fruits[0]);

// const myself = {
//     name: "min nyan htaw",
//     age : 17,
//     township: "hpa-an",
//     job : "developer",
//     skill : ["html","css","js"]
// }
// console.log(myself);
// console.log(myself["name"]);
// console.log(myself["age"]);
// console.log(myself["township"]);

// console.log(myself.name);
// console.log(myself.age);
// console.log(myself.job);

// myself.name = "Min";
// myself.age = 22;
// console.log(myself.name);

// const obj = {};

// obj["a"] = "aaa";
// obj.b = "bbb";
// obj.c = "ccc";
// obj.d = "ddd";
// obj.c = "zzz";

// console.log(obj);

// const name = "Mg Mg";
// let age = 15;
// let township = "Kyayk Myaung";

// let pocketMoney = 200;
// const orange = 50;

// pocketMoney -= orange;

// console.log(pocketMoney);

// const bag = ["Myanmar Book", "English Book", "Bio Book"];
// let pen = null;

// const canMgMgFriSmoke = true;
// const canMgMgSmoke = false;

// const st1 = {
//     name,
//     age,
//     township
// };

// console.log(st1);

// const st2 = {
//     name : "kyaw kyaw",
//     age : 18,
//     township : "hlaing"
// };

// const st3 = {
//     name : "zaw zaw",
//     age : 17,
//     township : "tamwe"
// };

// const st4 = {
//     name: "mya mya",
//     age: 16,
//     township: "sanchaung"
// };

// const students = [st1, st2, st3, st4];

// console.log(students);
// console.table(students);

// const record = [];
// let recordIndex = 0;
// record[recordIndex] = "aaa";

// function area(width, height) {
//   const resultArea = width * height;
//   record[recordIndex++] = {
//     width : width + "ft",
//     height: height + "ft",
//     area : resultArea + "sqft"
//   }
//   return `${resultArea} sqft`;
// }

// console.log(area(17, 60));
// console.log(area(15, 60));
// console.log(area(16, 60));
// console.log(area(19, 60));

// console.log(record);
// console.table(record);

// const rates = {
//   USD: 2100,
//   SGD: 1500,
//   EUR: 2200,
// };
// // console.log(rates["USD"]);

// function MMK(amount, toCurrency) {
//     const exchangeRate = rates[toCurrency];
//     const result = amount * exchangeRate;
//     return result + " MMK";
// }

// console.log(MMK(200, "USD"));
// console.log(MMK(1450, "SGD"));
// console.log(MMK(50, "EUR"));

//500000 MMK to USD ?
// 15000MMK to SGD ?
// 4000MMK to EUR ?p

// function fromMMK(amount, toCurrency) {
//     const exchangeRate = rates[toCurrency];
//     const result = amount / exchangeRate;
//     return result + " " + toCurrency;
// }
// console.log(fromMMK(500000,"USD"));
// console.log(fromMMK(15000, "SGD"));
// console.log(fromMMK(4000, "EUR"));

// 500 USD to EUR
// 14 SGD to USD
//160 EUR to SGD

// function exchange(amount,from,to) {
//     const fromCurrency = rates[from] * amount;
//     const toCurrency = rates[to];
//     const result = fromCurrency / toCurrency;
//     return ` ${amount} ${from} = ${result} ${to}`;
// }

// console.log(exchange(500,"USD","EUR"));
// console.log(exchange(14,"SGD", "USD"));
// console.log(exchange(160,"EUR","SGD"));

// const fruits = {
//   orange: 500,
//   mango: 1200,
//   banana: 200,
//   apple: 450,
//   lime: 50,
// };

// const record = [];
// let recordIndex = 0;
// let total = 0;

// function buy(fruit, quantity) {
//     const price = fruits[fruit];
//     const coast = price * quantity;
//     total += coast;
//     record[recordIndex++] = {
//         fruit,
//         price,
//         quantity,
//         coast
//     };
//     return `  ${fruit}  |  ${quantity}  |  ${coast} MMK `;
// }

// function tax (totalCoast, taxPercentage = 5) {
//     return totalCoast * (taxPercentage / 100);
// }

// console.log(buy("apple", 5));
// console.log(buy("orange", 3));
// console.log(buy("mango", 2));
// console.log(buy("banana", 1));
// console.log(buy("lime", 4));

// console.log("Coast Total" + total);
// console.log("Tax " + tax(total));
// console.log("Net Total " + tax(total));
// console.table(record);

// console.log(run());

// function run() {
//   return "I'm run";
// }

// const obj = {
//   a: "aaa",
//   b: "bbb",
//   c: "ccc",
//   // run: function () {
//   //   return "I'm run";
//   // },
//   run() {
//     return "I'm run" + this.a;
//   },
//   test() {
//     return "I'm test"
//   }
// };

// console.log(obj.a);
// console.log(obj.b);
// console.log(obj.c);
// console.log(obj.z);
// console.log(obj.run());

// if(true) {
//   console.log("*");
//   console.log("* * ");
//   console.log("* * * ");
// }
// else {
//   console.log("* * false * *");
// }

// const mark = 39;
// if(mark>=80) {
//   console.log("distention");
// } 
// else if (mark >= 40) {
//   console.log("pass");
// }
// else {
//   console.log("fail");
// }

for(let i=1; i<=10; i++) {
  console.log(i);
  if(i === 5) break;
}









