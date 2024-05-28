// import { createElement } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import Nh from "./Nh";
import "./style.css";

const rootElement = document.querySelector("#root");
const root = createRoot(rootElement);
root.render(<App />);

// const heading = document.createElement("h1");
// heading.innerText = "To do app";

// rootElement.append(heading);

// const tasks = ["Read Js Book", "Eat Less", "Work Out", "Get Up Early"];

// const root = createRoot(rootElement);
// root.render(
//   createElement(
//     "div",
//     null,
//     createElement("h1", null, "To Do App"),
//     createElement(
//       "form",
//       null,
//       createElement("input", null, null),
//       createElement("button", null, "add")
//     ),
//     createElement(
//       "ul",
//       null,
//       tasks.map((task, index) =>
//         createElement(
//           "li",
//           { key: index, className: "list mb-5 border border-black" },
//           task
//         )
//       )
//     )
//   )
// );
