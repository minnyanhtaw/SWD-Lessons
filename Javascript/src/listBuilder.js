// selector

const app = document.querySelector("#app");
const textInput = document.querySelector("#textInput");
const addBtn = document.querySelector("#addBtn");
const listGroup = document.querySelector("#listGroup");
const doneCount = document.querySelector("#doneCount");
const totalCount = document.querySelector("#totalCount");
const listTemplate = document.querySelector("#listTemplate");

// functions
const updateCounter = () => {
  totalCount.innerText = countListTotal();
  doneCount.innerText = countDoneListTotal();
};

const countListTotal = () => {
  return document.querySelectorAll(".list").length;
};

const countDoneListTotal = () => {
  return document.querySelectorAll(".list .list-checkbox:checked").length;
};

const createList = (text) => {
  const list = listTemplate.content.cloneNode(true);
  const listText = list.querySelector(".list-text");
  const listDelBtn = list.querySelector(".list-del-btn");
  const listCheckBox = list.querySelector(".list-checkbox");
  const listEditBtn = list.querySelector(".list-edit-btn");

  listText.innerText = text;
  return list;
};

// handler

const addList = () => {
  listGroup.append(createList(textInput.value));
  updateCounter();
  textInput.value = null;
};

const deleteList = (event) => {
  const list = event.target.closest(".list");
  if (confirm("Are You Sure to Delete?")) {
    list.classList.remove("animate__backInDown");
    list.classList.add("animate__fadeOutLeft");

    const removeList = () => {
      list.removeEventListener("animationend", removeList);
      list.remove();
      updateCounter();
    };

    list.addEventListener("animationend", removeList);
  }
};

const checkList = (event) => {
  // console.log(event.target);
  const listText = event.target.nextElementSibling;
  listText.classList.toggle("line-through");
  updateCounter();
};

const editList = (event) => {
  console.log(event.target);
  const list = event.target.closest(".list");
  const listText = list.querySelector(".list-text");

  const input = document.createElement("input");
  input.className = "border border-zinc-700 px-2 focus-visible:outline-none";
  input.value = listText.innerText;
  listText.after(input);
  input.focus();

  listText.classList.toggle("hidden");
  input.addEventListener("blur", updateList);
};

const updateList = (event) => {
  console.log(event.target);
  const currentValue = event.target.value;
  const list = event.target.closest(".list");
  const listText = list.querySelector(".list-text");
  listText.innerText = currentValue;

  event.target.remove();
  listText.classList.toggle("hidden");
};

const listGroupHandler = (event) => {
  console.log(event.target);
};

// Listener

addBtn.addEventListener("click", addList);
textInput.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    addList();
  }
});

listGroup.addEventListener("click", listGroupHandler);
