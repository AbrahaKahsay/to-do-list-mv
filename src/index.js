import './style.css';
import Refresh from './refresh.png';
import Enter from './enter.png';
import Todos from './modules/classes.js';
import { Tasks, collection, addData, removeData, updateIndex, updateTask,
  clearStorage, clearAllComplete, display, addList } from './modules/methods.js';


addData();

// Add event to add list
addList.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    const newTasks = new Todos();
    newTasks.description = addList.value;
    newTasks.complete = false;
    newTasks.index = `${collection.array.length + 1}`;
    collection.array.push(newTasks);
    newTasks.value = ' ';
    const stringData = JSON.stringify(collection.array);
    localStorage.setItem('Tasks', stringData);
    window.location.reload();
  }
});

// display the todos added
display();
removeData();
updateIndex();
updateTask();
clearStorage();
clearAllComplete();
// Add the refresh button
// handle and add to DOM
const refresher = document.getElementById('title');
const refresh = new Image();
refresh.src = Refresh;
refresh.id = 'refresh';
refresh.className = 'refresh';
refresher.appendChild(refresh);

// Loading the page for refresher
const reloadPage = document.querySelector('#refresh');
function reload() {
  window.location.reload();
}
reloadPage.addEventListener('click', reload, false);

// Add eneter key
const form = document.getElementById('list');
const enter = new Image();
enter.src = Enter;
enter.className = 'enter';
enter.id = 'enter';
form.appendChild(enter);