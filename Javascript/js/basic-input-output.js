// const area = (x, y) => x * y;
// // console.log(area(16,80));

// // window.alert("san kyi tar");

// const width = window.prompt("width");
// const height = window.prompt("height");
// document.write(area(width,height));

// console.log(area(width,height));

// const x = window.confirm("ထမင်းစားပြီးပြီလား");
// console.log(x);
// window.alert(x ? "စားပြီးပြီ" : "မစားရသေးဘူး");

// document.write("hello");
const textInput = document.getElementById("textInput");
const heading = document.getElementById("heading");
// console.dir(heading);
// console.dir(heading.innerHTML);
// console.dir(heading.innerText);

const para = document.getElementById("para");
// console.log(para);
const lists = document.getElementById("lists");
// console.dir(lists);
// console.dir(lists.innerHTML);
// console.dir(lists.innerText);

const list1 = document.getElementById("list-1");
// console.log(list1);

const run = () => {
  const data = textInput.value;
  heading.innerHTML = data;
  textInput.value = null;
};
