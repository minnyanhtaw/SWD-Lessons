import { data } from "autoprefixer";
import "./style.css";
const fetchBtn = document.querySelector("#fetchBtn");

const handleFetchBtn = () => {
  fetch("http://localhost:5000/tasks")
    .then((res) => res.json())
    .then((data) => console.log(data));
};

fetchBtn.addEventListener("click", handleFetchBtn);
