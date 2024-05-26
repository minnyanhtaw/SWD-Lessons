// selectors

const result = document.getElementById("result");
const widthInput = document.getElementById("widthInput");
const heightInput = document.getElementById("heightInput");
const calcuBtn = document.getElementById("calcuBtn");
const records = document.getElementById("records");
const clearBtn = document.getElementById("clearBtn");
const storeBtn = document.getElementById("storeBtn");

// logic function

const area = (w, h) => w * h;

// event listen

const handleBtn = () => {
  const areaResult = area(widthInput.valueAsNumber, heightInput.valueAsNumber);
  result.innerHTML = `${widthInput.valueAsNumber} ft * ${heightInput.valueAsNumber} ft = ${areaResult} ft<sup>2</sup>`;
  widthInput.value = "";
  heightInput.value = "";
};

const clearResult = () => {
  result.innerHTML = "";
  // console.log("hello");
};

const store = () => {
  records.innerHTML += `<li>${result.innerHTML}</li>`;
  clearResult();
};
