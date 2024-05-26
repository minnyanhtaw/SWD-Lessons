const app = document.querySelector("#app");
const heading = document.createElement("h1");

heading.innerHTML = "Min Ga Lar Par";
heading.classList.add("heading");
heading.id = "heading";
heading.title = "my heading";
heading.setAttribute("data-id", 3);

// console.log(heading);

const lists = document.createElement("ul");

const createList = (text) => {
  const list = document.createElement("li");
  list.innerText = text;
  return list;
};

// const list1 = document.createElement("li");
// list1.innerText = "Apple";

// const list2 = document.createElement("li");
// list2.innerText = "Orange";

// const list3 = document.createElement("li");
// list3.innerHTML = "Mango";

// const list4 = document.createElement("li");
// list4.innerHTML = "Lemon";

// lists.append(list1);
// lists.append(list2);
// lists.append(list3);
// lists.append(list4);

const textInput = document.createElement("input");
textInput.type = "text";
textInput.placeholder = "Say Something";

const btn = document.createElement("button");
btn.innerText = "add new";

btn.onclick = () => {
  console.log(textInput.value);
  lists.append(createList(textInput.value));
  textInput.value = null;
  textInput.focus();
};

// console.log(lists);

app.append(heading);
app.append(lists);
app.append(textInput);
app.append(btn);

const createOption = (text, value) => {
  const option = document.createElement("option");
  option.innerText = text;
  option.value = value;
  return option;
};


const table = document.createElement("table")
const thead = table.createTHead();
const theadRow = thead.insertRow();

const theadCell0 = theadRow.insertCell(0);
theadCell0.innerText = "No";

const theadCell1 = theadRow.insertCell(1);
theadCell1.innerText = "Name";

const theadCell2 = theadRow.insertCell(2);
theadCell2.innerText = "Age";

const tbody = table.createTBody();

const row0 = tbody.insertRow(0);
const row0Cell0 = row0.insertCell(0);
row0Cell0.innerText = "1";
const row0Cell1 = row0.insertCell(1);
row0Cell1.innerText = "Kyaw Kyaw";
const row0Cell2 = row0.insertCell(2);
row0Cell2.innerText = "18";


const row1 = tbody.insertRow(1);
const row1Cell0 = row1.insertCell(0);
row1Cell0.innerText = "2";
const row1Cell1 = row1.insertCell(1);
row1Cell1.innerText = "Mg Kyaw";
const row1Cell2 = row1.insertCell(2);
row1Cell2.innerText = "20";

app.append(table);
