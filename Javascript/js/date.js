// console.dir(Date);
// console.log(Date.now());
// console.log(Date.parse("2021-02-1"));

// const d = new Date(2006, 0, 10);
// console.dir(d);
// console.dir(d.toDateString());
// console.dir(d.toTimeString());
// console.dir(d.toLocaleDateString());
// console.dir(d.toLocaleTimeString());

// console.log(d.getFullYear());
// console.log(d.getMonth());
// console.log(d.getDay());
// console.log(d.getDate());

// console.log(d.getHours());
// console.log(d.getMinutes());
// console.log(d.getSeconds());
// console.log(d.getMilliseconds());

// const d = new Date();
// console.log(d.toLocaleDateString());
// d.setHours(d.getHours() + 300);
// console.log(d);
// console.log(d.toLocaleDateString());

// d.setMonth(d.getMonth() + 4);
// console.log(d.toLocaleDateString());

// d.setDate(d.getDate() + 25);
// console.log(d.toLocaleDateString());

// const md = new Date("2020-12-15");
// console.log(md);
// md.setDate(md.getDate() + 1000)
// console.log(md);

// const myName = "min nyan htaw"
// console.log(myName);

// console.dir(String);

// console.log(st.length);
// console.log(st[0]);
// console.log(st[1]);
// console.log(st[2]);

// console.log(st.search(""));

// console.log(st.replace ("Kyi" ,"aaa"));

// const newSt = st.trim();
// console.log(newSt);
// console.log(newSt.length);

// const coupon = "A4";

// console.log(coupon.padStart(8,0));
// console.log(coupon.padEnd(8, "X"));

// string to array

// const st = new String("San Kyi Tar Par Byar");
// // console.log(st);
// // console.log(st.length);

// console.log(st.split(" "));
//
// console.dir(Number);

// console.log(Number.parseInt("12Kyat"));
// console.log(Number.parseInt("230.45lb"));
// console.log(Number.parseFloat("12lb"));

// const num = new Number(45000.657);

// console.log(num);
// console.log(num.toFixed(3));
// console.log(num.toFixed(1));

// console.log(num.toExponential(2));

// console.log(Math);

// const circleArea = function (radius) {
//   return Math.PI * r ** 2;
// };

// console.log(Math.floor(34.56));
// console.log(Math.ceil(56.54));

// console.log((Math.random() * 100).toFixed());
// console.log(Math.random() * 1000);

// console.log(Math.pow(2, 8));
// console.log(Math.sqrt(16));

// console.log(Math.min(1,5,-3));
// console.log(Math.max(1,5,-3));

// console.log(Math.round(45.6));

// console.log(window.parseInt("123"));

// console.log(eval("1 + 5"));
// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 30,
// };

// // console.log(person);

// console.log(Object.keys(person));
// console.log((Object.values(person)));

// function rectangleArea(x,y) {
//     return x * y;
// }

// const circleArea = function(r) {
//     return Math.PI * r ** 2;
// }

// console.dir(Function);

// const run = new Function("a","b","return a+b");
// console.log(run(5,9));

// // console.dir(run);

// // console.log(run.call(null, 4, 5));

// console.log(run.bind(null,3,8).apply());

// console.dir(Array);

// const fruits = new Array("apple","banana","mango","orange");
// console.log(fruits);

// const fruits = [
//   "Apple",
//   "Banana",
//   "Orange",
//   "Grapes",
//   "Strawberry",
//   "Mango",
//   "Pineapple",
//   "Watermelon",
//   "Kiwi",
//   "Peach",
// ];

// console.log(fruits);

// fruits.sort();
// console.log(fruits);

// fruits.reverse();
// console.log(fruits);

// console.log(fruits.length);
// console.log(fruits.toString());
// console.log(fruits.join(" | "));

// const birthDay = ["10 Jan 2006"];
// function count() {
//   const birthDate = new Date(birthDay);
//   const currentDate = new Date();

//   const totalSeconds = (currentDate - birthDate) / 1000;
//   const days = Math.floor(totalSeconds / 86400);
//   const hours = Math.floor((totalSeconds / 3600) % 24);
//   const minutes = Math.floor((totalSeconds / 60) % 60);
//   const seconds = Math.floor(totalSeconds % 60);
// }
// console.log(count());

const fruits = [
  "Apple",
  "Banana",
  "Orange",
  "Grapes",
  "Watermelon",
  "Strawberry",
  "Pineapple",
  "Mango",
  "Kiwi",
  "Peach",
];

const chars = ["a", "e", "b", "r", "x"];
const numbs = [1, 6, 2, 0, 3, 5];


// chars.forEach(function (el) {
//   console.log(el);
// })
// const result = chars.concat(numbs).concat(fruits).concat(numbs);
// const result = [...chars, ...numbs, ...fruits];
// console.log(result);

// const obj = {
//   a: "aaa",
//   b: "bbb",
//   c: "ccc",
// };
// const numObj = { x: 1, y: 5, z: 3 };

// const myObj = { ...obj, ...numObj };
// console.log(myObj);

// console.log(fruits);
// console.log(fruits.slice(1,5));
// console.log(fruits.splice(1,5,"aaa","bb","ccc"));
// console.log(fruits);
// console.log(Array.isArray([]));
// console.log(fruits.includes("Apple"));
// console.log(fruits.indexOf("Ant"));

// console.log(
//   numbs.reduce(function (pv, cv) {
//     console.log(pv, cv);
//     return pv + cv;
//   }, 0)
// );

// console.log(
//   numbs.every(function (el) {
//     return el > 5;
//   })
// );

// console.log(
//   chars.reduce(function (pv, cv) {
//     console.log(pv, cv);
//     return pv + cv;
//   },"initial")
// );

// const result = numbs.map(function (el) {
//   console.log(el);
//   return el * 2;
// });
// console.log(result);

// chars.forEach(function(el) {
//   console.log(el);
// })

// fruits.forEach(function (el) {
//   console.log(el);
// })
// console.log(
//   chars.forEach(function (el) {
//     console.log(el);
//   })
// );

// for(el of chars) {
//   console.log(el);
// }

// const products = [
//   {
//     id: 101,
//     name: "Smartphone",
//     price: 599.99,
//     stock: 100,
//     rating: 4.7,
//   },
//   {
//     id: 102,
//     name: "Laptop",
//     price: 1299.99,
//     stock: 50,
//     rating: 4.5,
//   },
//   {
//     id: 103,
//     name: "Smart TV",
//     price: 799.99,
//     stock: 30,
//     rating: 4.8,
//   },
//   {
//     id: 104,
//     name: "Wireless Headphones",
//     price: 149.99,
//     stock: 80,
//     rating: 4.3,
//   },
//   // Add more products as needed
// ];

// console.table(products);

// console.log(
//   products.reduce(function (pv, cv) {
//     return pv + cv.price;
//   }, 0)
// );
// const saleProducts = products.map(function (el) {
//   el.price += 100;
//   el.rating = 5;
//   return el;
// });
// console.table(saleProducts);

// const saleProducts = products.filter(function (el) {
//   return el.price < 500;
// });

// console.table(saleProducts);

// console.log(
//   products.find(function (el) {
//     return el.price < 500;
//   })
// );

// console.log(
//   products.findIndex(function (el) {
//     return el.price < 500;
//   })
// );

// const sum = function(...all) {
//   // console.log(arguments);
//   let total = 0;
//   for(x of all) {
//     total += x;
//   }
//   return total;
// }
// console.log(sum(4,7,2,9,10));

const modifyArray = function (arr, logic) {
  const result = [];

  for (el of arr) {
    result.push(logic(el));
  }

  return result;
};
console.log(numbs);

console.log(
  modifyArray(numbs, function (el) {
    return el + 10;
  })
);
