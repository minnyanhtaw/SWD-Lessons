const h1 = document.querySelector("h1");
console.dir(h1);

// h1.style.color = "red";
// h1.style.backgroundColor = "yellow";
// h1.style.textAlign = "center";
// h1.style.padding = "10px";

// console.log(h1.style);
const link1 = document.querySelector("#link1");
const link2 = document.querySelector("#link2");
const dessertImg = document.querySelector("#dessertImg");
const hsPhoto = document.querySelector(".hs-photo");
// const dessert1Img = document.querySelector("#dessert1Img");

// get attr
console.log(link1.href);
console.log(link2.href);
console.log(link2.getAttribute("href"));

// set attr
link1.href = "https://youtube.com";
link2.setAttribute("href", "https://mms-it.com");

link1.setAttribute("target", "_blank");
link2.setAttribute("my-name", "Min Nyan Htaw");
console.log(dessertImg.src);
console.log(dessertImg.getAttribute("src"));

const changeImg = (src) => {
  dessertImg.src = src;
};

const toggleImg = () => {
  hsPhoto.classList.toggle("active");
};
