// import _ from 'lodash';
import "./style.css";
import Refresh from "./refresh.png";
import Enter from "./enter.png";
import Todos from "./classes.js";
import { Tasks, addList, display } from "./methods.js";

// creating a todo list collection by instantiating Tasks class
const collection = new Tasks();

// check local storage and update
if (localStorage.Tasks) {
  collection.array = JSON.parse(localStorage.Tasks);
}

// Add event to add list
addList.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    const newTasks = new Todos();
    newTasks.description = addList.value;
    newTasks.complete = false;
    newTasks.index = `${collection.array.length + 1}`;
    collection.array.push(newTasks);
    console.log(collection.array);
    newTasks.value = "";
    const stringData = JSON.stringify(collection.array);
    localStorage.setItem("Tasks", stringData);
    window.location.reload();
  }
});

// display the todos added
display();

// remove item from collection
for (let i = 0; i < collection.array.length; i += 1) {
  const remove = document.getElementById(`remove${i}`);
  const descriptionName = collection.array[i].description;
  const deleteItem = document.getElementById(`item${i}`);
  // Add event listner
  remove.addEventListener("click", () => {
    const filtered = collection.array.filter(
      (Tasks) => Tasks.description !== descriptionName
    );
    const stringData = JSON.stringify(filtered);
    localStorage.setItem("Tasks", stringData);
    deleteItem.remove();
    window.location.reload();
  });
}

// update index
const updateIndex = () => {
  collection.array.forEach((todos, index) => {
    todos.index = index;
  });
  const stringData = JSON.stringify(collection.array);
  localStorage.setItem("Tasks", stringData);
};
updateIndex();

// Edit and update tasks in the localStorage;
const updateTask = () => {
  const list = document.getElementsByClassName("list");
  // console.log(list);
  for (let i = 0; i < list.length; i += 1) {
    list[i].addEventListener("change", () => {
      collection.array[i].description = list[i].value;
      const stringData = JSON.stringify(collection.array);
      localStorage.setItem("Tasks", stringData);
      window.location.reload();
    });
  }
};
updateTask();

// Add functionality to checkbox
for (let i = 0; i < collection.array.length; i += 1) {
  const checkbox = document.getElementById(`box${i}`);
  checkbox.addEventListener("change", () => {
    if (collection.array[i].complete === false) {
      collection.array[i].complete = true;
      localStorage.setItem("Tasks", JSON.stringify(collection.array));

      const list = document.getElementById(`list${i}`);
      list.style.textDecoration = "line-through";
    } else if (collection.array[i].complete === true) {
      collection.array[i].complete = false;
      localStorage.setItem("Tasks", JSON.stringify(collection.array));

      const lists = document.getElementById(`list${i}`);
      lists.style.textDecoration = "none";
    }
  });
}

// Add functionality to clear button
const clear = document.getElementById("clearBtn");
clear.addEventListener("click", () => {
  for (let i = 0; i < collection.array.length; i += 1) {
    // console.log(collection.array[i].complete);
    if (collection.array[i].complete) {
      const markedItem = document.getElementById(`item${i}`);
      // console.log(markedItem);
      markedItem.remove();
    }
  }

  // filtering out incomplete tasks
  collection.array = collection.array.filter(
    (items) => items.complete === false
  );
  // console.log(filtered);
  const stringData = JSON.stringify(collection.array);
  // console.log(stringData);

  // store filtered items into local storage
  localStorage.setItem("Tasks", stringData);

  const remove = document.querySelector(".trashIcon");
  remove.style.display = "none";

  updateTask();
  updateIndex();
  window.location.reload();
});

// Add the refresh button
// handle and add to DOM
const refresher = document.getElementById("title");
const refresh = new Image();
refresh.src = Refresh;
refresh.id = "refresh";
refresh.className = "refresh";
refresher.appendChild(refresh);

const reloadPage = document.querySelector("#refresh");
// Reload everything:
function reload() {
  window.location.reload();
}
// Event listeners for reload
reloadPage.addEventListener("click", reload, false);

// Add eneter key
const form = document.getElementById("list");
const enter = new Image();
enter.src = Enter;
enter.className = "enter";
enter.id = "enter";
form.appendChild(enter);