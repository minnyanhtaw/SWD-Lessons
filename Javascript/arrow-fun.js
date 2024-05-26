// const arrowSum = (a, b) => a + b;
// console.log(arrowSum(4,5));

// const squareArea = (w) => w ** 2;

// console.log(squareArea(5));

// const circleArea = (r) => {
//   return Math.PI * r ** 2;
// };
// console.log(circleArea(5));

// const findAge = (dateString) => {
//     const date = new Date();
//     const currentYear = date.getFullYear();

//     const inputDate = new Date(dateString);
//     const birthYear = inputDate.getFullYear();
//     return currentYear - birthYear;
// }

// console.log(findAge("2006-1-10"));

const products = [
  { id: 1, name: "Smartphone", price: 699.99, stock: 100, rating: 4.5 },
  { id: 2, name: "Laptop", price: 1299.99, stock: 50, rating: 4.8 },
  { id: 3, name: "Headphones", price: 149.99, stock: 200, rating: 4.3 },
  { id: 4, name: "Smartwatch", price: 249.99, stock: 80, rating: 4.2 },
  { id: 5, name: "Tablet", price: 499.99, stock: 30, rating: 4.1 },
];

console.table(products);

console.table(products.filter((stock) => stock >= 100));

// console.table(
//   products.map(({name, price}) => {
//     return {
//       product_name: name,
//       sale_price: price + 100,
//     };
//   })
// );

// console.table(F
//   products
//     .filter((products) => products.stock >= 100)
//     .map((products) => ({ ...products, price: products.price - 20 }))
//     .map((products) => products.name).join("\n")
// );

// console.table(products);
// products.sort((a, b) => b.name.charCodeAt() - a.name.charCodeAt());
// console.table(products);

// console.table(products);
// products.sort((a,b) => b.price - a.price);
// console.table(products);

// console.table(
//   products.map((products) => {
//     products.price += 100;
//     return products;
//   })
// );

// console.table(
//   products.map((products) => ({ ...products, price: products.price + 100 }))
// );

// console.table(products.filter((products) => products.stock >= 100));

// console.log(products.reduce((pv, cv) => pv + cv.price, 0));

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

// fruits.sort();
// console.table(fruits);

// fruits.sort((a, b) => b.charCodeAt() - a.charCodeAt());
// console.table(fruits);

const chars = ["a", "e", "z", "b", "r", "x"];
const numbs = [10, 16, 3.2, 0, 39, 53, 2.1, -21, 5];

// console.log(numbs);

// console.log(chars);
// chars.sort((a, b) => b.charCodeAt() - a.charCodeAt());
// console.log(chars);

// numbs.sort();
// console.log(numbs);

// numbs.sort((a, b) => a - b);
// console.log(numbs);

// numbs.sort((a, b) => b - a);
// console.log(numbs);
