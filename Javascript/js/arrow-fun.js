// // const sum = function (a, b) {
// //   return a + b;
// // };

// // console.log(sum(4,5));

// // const arrowSum = (a,b) => a+b;
// // console.log(arrowSum(4,5));

// // const run = function () {
// //   return "this is run";
// // };

// // const arrowRun = () => "this is run";
// // console.log(arrowRun());

// // const squareArea = function (w) {
// //   return w ** 2;
// // };
// // console.log(squareArea(4));

// // const arrowSquareArea = (w) => w ** 2;
// // console.log(arrowSquareArea(4));

// // const circleArea = function (r) {
// //   return Math.PI * r ** 2;
// // };
// // console.log(circleArea(30));

// // const arrowCircleArea = (r) => Math.PI * r ** 2;
// // console.log(arrowCircleArea(30));

// // const area = function (w, h) {
// //   return w * h;
// // };
// // console.log(area(4,5));

// // const arrowArea = (w,h) => w * h;
// // console.log(arrowArea(4,5));

// // const findAge = function (dateString) {
// //   const date = new Date();
// //   const currentYear = date.getFullYear();

// //   const inputDate = new Date(dateString);
// //   const birthYear = inputDate.getFullYear(dateString);

// //   return currentYear - birthYear;
// // };

// // console.log(findAge("2006-01-10"));

// // const arrowFindAge = (dateString) => {
// //     const date = new Date()
// //     const currentYear = date.getFullYear()

// //     const inputDate = new Date(dateString);
// //     const birthYear = inputDate.getFullYear(dateString)

// //     return currentYear - birthYear;
// // }
// // console.log(arrowFindAge("2006-01-10"));

const products = [
  {
    id: 101,
    name: "Smartphone",
    price: 599.99,
    stock: 100,
    rating: 4.7,
  },
  {
    id: 102,
    name: "Laptop",
    price: 1299.99,
    stock: 50,
    rating: 4.5,
  },
  {
    id: 103,
    name: "Smart TV",
    price: 799.99,
    stock: 30,
    rating: 4.8,
  },
  {
    id: 104,
    name: "Wireless Headphones",
    price: 149.99,
    stock: 80,
    rating: 4.3,
  },
];

console.table(products);

// console.table(products.filter((product) => product.stock >= 100));

// console.table(
//     products.reduceRight((pv,cv) => pv + cv.price,0)
// );

// console.table(
//   products.map((product) => {
//     product.price += 100;
//     return product;
//   })
// );

// console.table(
//   products.map((product) => ({ ...product, price: product.price + 100 }))
// );

// console.table(products.filter(({stock}) => stock >= 100));

// // console.table(
// //   products.map(({name,price}) => {
// //     return {
// //       product_name: name,
// //       sale_price: price + 100,
// //     };
// //   })
// // );

// // const text = "san kyi tar bar byar ma ya buu lar kwawr";

// // console.log(
// //   text
// //     .split(" ")
// //     .filter((el) => el.length === 3)
// //     .map((el) => el.toUpperCase())
// //     .join(" ")
// // );

// // console.table(
// //   products
// //     .filter((product) => product.stock >= 100)
// //     .map((product) => ({ ...product, price: product.price - 20 }))
// //     .map((product) => product.name)
// // );

// // console.table(products);

// // products.sort((a,b) => b.name.charCodeAt() - a.name.charCodeAt())

// // console.table(products);
// // console.table(products);

// // console.table(products.filter((product) => product.stock >= 100));

// // console.log(products.reduce((pv,cv) => pv + cv.price, 0));

// // console.table(
// //   products.map((product) => {
// //     product.price += 100;
// //     return product;
// //   })
// // );

// // console.table(
// //     products.map((product) =>({
// //         ...product, price: product.price += 100
// //     }))
// // );

// const fruits = [
//   "Apple",
//   "Banana",
//   "Orange",
//   "Grapes",
//   "Watermelon",
//   "Strawberry",
//   "Pineapple",
//   "Mango",
//   "Kiwi",
//   "Peach",
// ];
// // console.table(fruits);
// // fruits.sort((a,b) => b.charCodeAt() - a.charCodeAt())
// // console.table(fruits);

// const chars = ["a", "e", "b", "r", "x"];
// const numbs = [10, 16, 3.2, 0, 39, 2.1, -21, 5];

// // console.log(numbs);

// // numbs.sort((a,b) => a-b);
// // numbs.sort((a,b) => b - a);

// // numbs.sort((a,b) => {
// //     console.log(a,b);
// //     return a - b;
// // });

// // console.log(numbs);

// // const arr = ["a", "b", "c", "d"];
// // const [x, y, z] = arr;

// // console.log(x);
// // console.log(y);
// // console.log(z);

// // const obj = { a: "aaa", b: "bbb", c: "ccc" };
// // const { a, b } = obj;

// // console.log(a);
// // console.log(b);

// const sum = function (a, b) {
//   return a + b;
// };
// console.log(sum(4, 5));

// const arrowSum = (a, b) => a + b;
// console.log(arrowSum(4, 5));

// const squareArea = function (w) {
//   return w ** 2;
// };
// console.log(squareArea(4));

// const arrowSquareArea = (w) => w ** 2;
// console.log(arrowSquareArea(4));

// const circleArea = function (r) {
//   return Math.PI * r ** 2;
// };
// console.log(circleArea(30));

// const arrowCircleArea = r => Math.PI * r **2;
// console.log(arrowCircleArea(30));

// const area = function (w,h) {
//     return w*h;
// }
// console.log(area(4,5));

// const arrowArea = (w,h) => w*h;
// console.log(arrowArea(4,5));

// const findAge = function (dateString) {
//   const date = new Date();
//   const currentYear = date.getFullYear();
//   const inputDate = new Date(dateString);
//   const birthYear = inputDate.getFullYear();

//   return currentYear - birthYear;
// };
// console.log(findAge("2006-01-10"));

// const arrowFindAge = (dateString) => {
//   const date = new Date();
//   const currentYear = date.getFullYear();
//   const inputDate = new Date(dateString);
//   const birthYear = inputDate.getFullYear();

//   return currentYear - birthYear;
// };
// console.log(arrowFindAge("2006-01-10"));
