// import _ from 'lodash';
import './style.css';
import Todos from './modules/classes.js';
import { Tasks, addList, display } from './modules/methods.js';

// creating a todo list collection by instantiating Tasks class
const collection = new Tasks();

// check local storage and update
if(localStorage.Tasks){
  collection.array = JSON.parse(localStorage.Tasks);
}

// Add event to add list
addList.addEventListener('keypress', (event)=>{
  if(event.key === 'Enter') {

    const newTasks = new Todos();
    newTasks.description = addList.value;
    newTasks.complete = false;
    newTasks.index = `${collection.array.length + 1}`;
    collection.array.push(newTasks);
    newTasks.value = ' ';
    const stringData = JSON.stringify(storage.array);
    localStorage.setItem('Tasks', stringData);
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
  remove.addEventListener('click', () => {
    const filtered = collection.array.filter((Tasks) => Tasks.description !== descriptionName);
    const stringData = JSON.stringify(filtered);
    localStorage.setItem('Tasks', stringData);
    deleteItem.remove();
    window.location.reload();
  });
}

// update index
const updateIndex = () => {
  collection.array.forEach((todos, index) => {
    todos.index = index + 1;
  });
  const stringData = JSON.stringify(collection.array);
  localStorage.setItem('Tasks', stringData);
};
updateIndex();

// Edit and update tasks in the localStorage;
const updateTask = () => {
  const list = document.getElementsByClassName('list');
  for (let i = 0; i < list.length; i += 1) {
    list[i].addEventListener('change', () => {
      collection.array[i].description = list[i].value;
      const stringData = JSON.stringify(storage.array);
      localStorage.setItem('tasks', stringData);
      window.location.reload();
    });
  }
};
updateTask();
export default collection;