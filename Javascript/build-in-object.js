// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 30,
// };

// console.log(Object.keys(person));
// console.log(Object.values(person));

// const run = new Function("a","b", "return a+b");
// console.log(run(5,4));

// console.log(run.call(null,4,5));
// console.log(run.bind(null, 3,8).apply());

// const fruits = new Array("appple","banana","mango","orange")
// console.log(fruits);

const fruits = [
  "apple",
  "banana",
  "orange",
  "grape",
  "kiwi",
  "strawberry",
  "watermelon",
  "pineapple",
  "mango",
  "pear",
];
// const chars = ["a","b","c","d","e"];

// const result = [...chars,...numbs,...chars];

// console.log(result);

// console.log(fruits);
// console.log(fruits.slice(1,5));
// console.log(fruits.splice(1,5, "aaa" ,"bbb"));
// console.log(fruits);

// console.log(Array);
// console.log(Array.isArray([]));
// console.log(fruits.length);
// console.log(fruits.toString());
// console.log(fruits.join("  | "));

// console.log(fruits.pop());
// console.log(fruits.pop());
// console.log(fruits.shift());
// console.log(fruits.shift());
// console.log(fruits.push("xxx"));
// console.log(fruits.unshift("aaa"));
// console.log(fruits);

// const sumAll = function(...all) {
//   console.log(all);
//   let total = 0
//   for(x of all) {
//     total += x;
//   }
//   return total;
// }

// console.log(sumAll(10,2,3,4,5,6,77,5,67,77));

// const modifyArray = function (arr, logic) {
//   const result = [];

//   for (el of arr) {
//     result.push(logic(el));
//   }
//   return result;
// };

// const logic = function (el) {
//   return el + 10;
// }

// console.log(modifyArray(numbs, logic));

// chars.forEach(function (el) {
//   console.log(el);
// });

// numbs.forEach(function (el) {
//   console.log(el);
// });

// fruits.forEach(function (el,index) {
//   console.table(el,index);
// });

// console.log(numbs);

// const r = numbs.map(function (el) {
//   console.log(el);
//   return el * 2;
// });

// console.log(r);



// console.table(products);

// const saleProducts = products.map(function (el) {
//   console.log(el.price);
//   el.price += 100;
//   return el;
// });

// console.table(saleProducts);

// const saleProducts = products.filter(function (el) {
//   // return el.price > 500;
//   return el.id === 3 || el.id == 5;
// });

// console.table(saleProducts);

// const saleProducts = products.findIndex(function (el) {
//   return el.id === 3;
// });

// console.log(saleProducts);

const numbs = [1, 6, 2, 0, 3, 5];
const chars = ["a", "b", "c", "d"];

console.log(
  numbs.some(function (el) {
    return el > 5;
  })
);

console.log(
  numbs.every(function (el) {
    return el > 5;
  })
);

// console.log(
//   chars.reduce(function (pv, cv) {
//     console.log(pv, cv);
//     return pv + cv;
//   }, "")
// );

// console.log(
//   numbs.reduce(function (pv, cv) {
//     console.log(pv, cv);
//     return pv + cv;
//   }, 0)
// );
