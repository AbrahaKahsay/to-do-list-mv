// import _ from 'lodash';
import './style.css';
import Todos from './modules/classes.js';
import { Tasks, addList, display } from './modules/methods.js';

// creating a todo list collection by instantiating Tasks class
const collection = new Tasks();

if(localStorage.Tasks){
  collection.array = JSON.parse(localStorage.Tasks);
}

for (let i = 0; i < tasks.length; i += 1) {
  // creating and appending checkbox
  const checkBox = document.createElement('input');
  checkBox.setAttribute('type', 'checkbox');
  checkBox.setAttribute('id', 'checkbox');
  form.appendChild(checkBox);

  // creatind and appending label
  const myLabel = document.createElement('label');
  myLabel.setAttribute('for', 'checkbox');
  myLabel.setAttribute('id', 'lab');
  myLabel.innerHTML = tasks[i].description;
  form.appendChild(myLabel);

  // creating and appending line break
  const lineBreak = document.createElement('br');
  form.appendChild(lineBreak);

  // creating and appending line
  const line = document.createElement('hr');
  form.appendChild(line);
}
