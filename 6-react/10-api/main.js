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

const handleFetchBtn = async () => {
  const res1 = await fetch("https://fakestoreapi.com/products/1");
  const data1 = await res1.json();
  console.log(data1);

  const res2 = await fetch("https://fakestoreapi.com/products/2");
  const data2 = await res2.json();
  console.log(data2);

  const res3 = await fetch("https://fakestoreapi.com/products/3");
  const data3 = await res3.json();
  console.log(data3);

  const res4 = await fetch("https://fakestoreapi.com/products/4");
  const data4 = await res4.json();
  console.log(data4);

  const res5 = await fetch("https://fakestoreapi.com/products/5");
  const data5 = await res5.json();
  console.log(data5);
  // new Promise(function (resolve, reject) {
  //   setTimeout(() => {
  //     const val = Math.floor(Math.random() * 10);
  //     if (val > 5) {
  //       resolve(val);
  //     } else {
  //       reject(val);
  //     }
  //   },2000);
  // }).then(
  //   function (x) {
  //     console.log("success", x);
  //   },
  //   function (y) {
  //     console.log("fail", y);
  //   }
  // );

  // let x = 0;
  // const p = new Promise(function (resolve, reject) {
  //   setTimeout(() => {
  //     resolve(5);
  //   }, 2000);
  // });

  // p.then(function (data) {
  //   x = data;
  //   console.log(x === 5 ? "good" : "bad");
  // });

  // console.log("you click");
  // // async

  // fetch("https://fakestoreapi.com/products/1")
  //   .then((res) => res.json())
  //   .then((categories) => console.log(categories));

  // fetch("https://fakestoreapi.com/products/2")
  //   .then((res) => res.json())
  //   .then((categories) => console.log(categories));

  // fetch("https://fakestoreapi.com/products/3")
  //   .then((res) => res.json())
  //   .then((categories) => console.log(categories));

  // fetch("https://fakestoreapi.com/products/4")
  //   .then((res) => res.json())
  //   .then((categories) => console.log(categories));

  // fetch("https://fakestoreapi.com/products/5")
  //   .then((res) => res.json())
  //   .then((categories) => console.log(categories));

  // fetch("http://localhost:5000/tasks")
  //   .then((res) => res.json())
  //   .then((data) => {
  //     data.forEach((task) => {
  //       tasksGroup.append(createTask(task));
  //     });
  //   });

  // fetch("http://localhost:5000/tasks")
  //   .then((res) => res.json())
  //   .then((data) => console.log(data));
};

fetchBtn.addEventListener("click", handleFetchBtn);
