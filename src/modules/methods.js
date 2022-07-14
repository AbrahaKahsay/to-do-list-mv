import Trash from './trash-bin.png';
// handles DoM elements
const addList = document.getElementById('add-list');
const newList = document.getElementById('new-list');

// Create a class for tasks
class Tasks {
  constructor() {
    this.array = [];
  }
}

const collection = new Tasks();

const addData = () => {
  if (localStorage.Tasks) {
    collection.array = JSON.parse(localStorage.Tasks);
  }
};

// remove item from collection
const removeData = ()=> {
  for (let i = 0; i < collection.array.length; i += 1) {
    const remove = document.getElementById(`remove${i}`);
    const descriptionName = collection.array[i].description;
    const deleteItem = document.getElementById(`item${i}`);
    // Add event listner
    remove.addEventListener('click', () => {
      const filtered = collection.array.filter(
        (Tasks) => Tasks.description !== descriptionName,
      );
      const stringData = JSON.stringify(filtered);
      localStorage.setItem('Tasks', stringData);
      deleteItem.remove();
      window.location.reload();
    });
  }
};

// update index
const updateIndex = () => {
  collection.array.forEach((todos, index) => {
    todos.index = index;
  });
  const stringData = JSON.stringify(collection.array);
  localStorage.setItem('Tasks', stringData);
};

// Edit and update tasks in the localStorage;
const updateTask = () => {
  const list = document.getElementsByClassName('list');
  for (let i = 0; i < list.length; i += 1) {
    list[i].addEventListener('change', () => {
      collection.array[i].description = list[i].value;
      const stringData = JSON.stringify(collection.array);
      localStorage.setItem('Tasks', stringData);
      window.location.reload();
    });
  }
};

const clearStorage = ()=>{
    // Add functionality to checkbox
  for (let i = 0; i < collection.array.length; i += 1) {
    const checkbox = document.getElementById(`box${i}`);
    checkbox.addEventListener('change', () => {
      if (collection.array[i].complete === false) {
        collection.array[i].complete = true;
        localStorage.setItem('Tasks', JSON.stringify(collection.array));

        const list = document.getElementById(`list${i}`);
        list.style.textDecoration = 'line-through';
      } else if (collection.array[i].complete === true) {
        collection.array[i].complete = false;
        localStorage.setItem('Tasks', JSON.stringify(collection.array));

        const lists = document.getElementById(`list${i}`);
        lists.style.textDecoration = 'none';
      }
    });
  }
}

const clearAllComplete = () => {
  // Add functionality to clear button
  const clear = document.getElementById('clearBtn');
  clear.addEventListener('click', () => {
    for (let i = 0; i < collection.array.length; i += 1) {
      if (collection.array[i].complete) {
        const markedItem = document.getElementById(`item${i}`);
        markedItem.remove();
      }
    }
    collection.array = collection.array.filter(
      (items) => items.complete === false,
    );
    const stringData = JSON.stringify(collection.array);
    localStorage.setItem('Tasks', stringData);
    const remove = document.querySelector('.trashIcon');
    remove.style.display = 'none';

    updateTask();
    updateIndex();
    window.location.reload();
  });
}

// create display method to show on the DoM
const display = () => {
  if (localStorage.Tasks) {
    for (let i = 0; i < JSON.parse(localStorage.Tasks).length; i += 1) {
      // creating a div element to store form inputs
      const div = document.createElement('div');

      const todo = document.createElement('div');
      todo.className = 'myTasks';
      todo.id = `item${i}`;

      // create and append checkbox
      const newCheck = document.createElement('input');
      newCheck.setAttribute('type', 'checkbox');
      newCheck.setAttribute('id', `box${i}`);

      const checkStatus = JSON.parse(localStorage.Tasks)[i].complete;
      if (checkStatus) {
        newCheck.checked = true;
      }

      todo.appendChild(newCheck);

      // create and append label
      const newLabel = document.createElement('input');
      newLabel.setAttribute('type', 'text');
      newLabel.className = 'list';
      newLabel.id = `list${i}`;
      if (checkStatus) {
        newLabel.style.textDecoration = 'line-through';
      }
      newLabel.value = JSON.parse(localStorage.Tasks)[i].description;
      todo.appendChild(newLabel);

      // create and line break
      const lineBreak = document.createElement('br');
      todo.appendChild(lineBreak);

      const trashIcon = new Image();
      trashIcon.className = 'trashIcon';
      trashIcon.id = `remove${i}`;
      trashIcon.src = Trash;
      div.appendChild(trashIcon);

      todo.appendChild(div);
      newList.appendChild(todo);
    }
  }
};
export { Tasks, collection, addData, removeData, updateIndex, updateTask,
  clearStorage, clearAllComplete, display, addList };