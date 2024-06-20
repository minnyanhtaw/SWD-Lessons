import React, { createElement } from "react";
import { createRoot } from "react-dom/client";

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

const heading = (
  <>
    <h1>Min GaLar Par</h1>
    <p>this is text</p>
    <a href="https://mms-it.com">see more</a>
  </>
);

reactRoot.render(heading); //react node => DOM node

// DOM NODE

// const heading = document.createElement("h1");
// const text = document.createTextNode("Min Ga Lar Par");
// heading.append(text);
// // heading.className = "font-bold text-center";
// heading.classList.add("font-bold");
// heading.classList.add("text-center");
// heading.classList.add("text");
// console.log(heading);
