import React, { createElement } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

const root = document.querySelector("#root");
const reactRoot = createRoot(root);

// REACT NODE
// const heading = createElement(
//   "div",
//   null,
//   createElement(
//     "h1",
//     { className: "text-center font-bold", title: "page title" },
//     "Min GaLar Par"
//   ),
//   createElement("p", { className: "text-black" }, "This is text"),
//   createElement("a", { href: "https://mms-it.com" }, "see more")
// );
const fruits = [
  "Apple",
  "Banana",
  "Cherry",
  "Date",
  "Elderberry",
  "Fig",
  "Grape",
  "Honeydew",
];

const products = [
  {
    id: 1,
    name: "Laptop",
    price: 999.99,
    stock: 25,
  },
  {
    id: 2,
    name: "Smartphone",
    price: 699.99,
    stock: 50,
  },
  {
    id: 3,
    name: "Headphones",
    price: 199.99,
    stock: 75,
  },
  {
    id: 4,
    name: "Smartwatch",
    price: 299.99,
    stock: 30,
  },
  {
    id: 5,
    name: "Tablet",
    price: 399.99,
    stock: 40,
  },
];

// const heading = (
//   <>
//     {/* <h1>Min GaLar Par</h1>
//     <p>this is text</p>
//     <a href="https://mms-it.com">see more</a> */}
//     <h2>List Rendering</h2>
//     {/* {fruits.map((fruit) => (
//       <li key={fruit}>{fruit}</li>
//     ))} */}

//     {products.map(({ id, name, price, stock }) => (
//       <li>
//         {name} - {price} - {stock < 50 ? "out of stock" : stock}
//       </li>
//     ))}
//   </>
// );

reactRoot.render(<App/>); //react node => DOM node

// DOM NODE

// const heading = document.createElement("h1");
// const text = document.createTextNode("Min Ga Lar Par");
// heading.append(text);
// // heading.className = "font-bold text-center";
// heading.classList.add("font-bold");
// heading.classList.add("text-center");
// heading.classList.add("text");
// console.log(heading);
