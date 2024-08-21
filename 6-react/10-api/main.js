import "./style.css";
const app = document.querySelector("#app");
const fetchBtn = document.querySelector("#fetchBtn");
const tasksGroup = document.querySelector("#tasksGroup");
const tasksTemplate = document.querySelector("#tasksTemplate");

const createTask = (task) => {
  const taskCard = tasksTemplate.content.cloneNode(true);
  const taskTitle = taskCard.querySelector(".task-title");
  const taskDescription = taskCard.querySelector(".task-description");
  const taskPriority = taskCard.querySelector(".task-priority");
  const taskDueDate = taskCard.querySelector(".task-due-date");
  return taskCard;
};

const handleFetchBtn = () => {
  fetch("http://localhost:5000/tasks")
    .then((res) => res.json())
    .then((data) => {
      data.forEach((task) => {
        tasksGroup.append(createTask(task));
      });
    });
};

fetchBtn.addEventListener("click", handleFetchBtn);
