const app = document.querySelector("#app");

// const heading = document.createElement("h1");
// heading.innerText = "To do App";

// const createForm = document.createElement("form");
// const textInput = document.createElement("input");
// const button = document.createElement("button");
// button.innerText = "Add";

// app.append(heading);
// app.append(createForm);
// createForm.append(textInput);
// createForm.append(button);

// const lists = document.createElement("ul");

// const list1 = document.createElement("li");
// list1.innerText = "Learn React";
// lists.append(list1);

// const list2 = document.createElement("li");
// list2.innerText = "Learn css";
// lists.append(list2);

// const list3 = document.createElement("li");
// list3.innerText = "Learn html";
// lists.append(list3);

// const list4 = document.createElement("li");
// list4.innerText = "Learn js";
// lists.append(list4);

// app.append(lists);

const tasks = ["sleep well", "eat less", "learn react"];

const createHeading = (text) => {
  const heading = document.createElement("h1");
  heading.innerText = text;
  return heading;
};

const createForm = () => {
  const createForm = document.createElement("form");
  const textInput = document.createElement("input");
  const button = document.createElement("button");
  button.innerText = "Add";
  createForm.append(textInput);
  createForm.append(button);

  return createForm;
};

const createListGroup = () => {
  const lists = document.createElement("ul");
  lists.setAttribute("id", "listGroup");
  return lists;
};

const createList = (text) => {
  const list = document.createElement("li");
  list.innerText = text;
  return list;
};

const renderList = (lists) => {
  const listGroup = app.querySelector("#listGroup");
  listGroup.innerHTML = "";
  lists.forEach((list) => listGroup.append(createList(list)));
};

(function () {
  app.append(createHeading("learn js"));
  app.append(createForm());
  app.append(createListGroup());

  renderList(tasks);
//   renderList(tasks);
//   renderList(tasks);

})();
