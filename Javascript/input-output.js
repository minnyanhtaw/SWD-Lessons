const heading = document.getElementById("heading");
const para = document.getElementById("para");
const lists = document.getElementById("lists");
const list1 = document.getElementById("list1");
const textInput = document.getElementById("textInput");
const btn = document.getElementById("btn");

// console.log(heading);
// console.log(para);
// console.log(lists);
// console.log(list1); 
// console.log(textInput);
// console.log(btn);

const run = () => {
    const value = textInput.value;
    
    heading.innerText = value;
    textInput.value = null;
}

// console.dir(heading);
// console.dir(heading.innerHTML);
// console.dir(heading.innerText);
