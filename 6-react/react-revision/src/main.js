import React, { createElement } from "react";
import { createRoot } from "react-dom/client";

const root = document.querySelector("#root");

const reactRoot = createRoot(root);

const heading = createElement(
  "h1",
  { className: "text-center" },
  "Min Ga Lar Par"
);

reactRoot.render(heading);
