import Dots from './dots.png';
import Trash from './trash-bin.png';
import Edit from './edit.png';

// handles DoM elements
const addList = document.getElementById('add-list');
const newList = document.getElementById('new-list');

// Create a class for tasks
class Tasks {
  constructor() {
    this.array = [];
  }
}

// create display method to show on the DoM
const display = () => {
  if (localStorage.Tasks) {
    for (let i = 0; i < JSON.parse(localStorage.Tasks).length; i += 1) {
      // creating a div element to store form inputs
      const div = document.createElement('div');

      const todo = document.createElement('div');
      todo.id = `item${i}`;

      // create and append checkbox
      const newCheck = document.createElement('input');
      newCheck.setAttribute('type', 'checkbox');
      newCheck.setAttribute('id', `${i}`);
      todo.appendChild(newCheck);

      // create and append label
      const newLabel = document.createElement('input');
      newLabel.setAttribute('type', 'text');
      newLabel.className = 'list';
      newLabel.id = `list${i}`;
      newLabel.value = JSON.parse(localStorage.Tasks)[i].description;
      todo.appendChild(newLabel);

      // create and line break
      const lineBreak = document.createElement('br');
      todo.appendChild(lineBreak);

      // create and append line
      const line = document.createElement('hr');
      todo.appendChild(line);

      const editIcon = new Image();
      editIcon.className = 'iconEdit';
      editIcon.id = `edit${i}`;
      editIcon.src = Edit;
      div.appendChild(editIcon);

      const trashIcon = new Image();
      trashIcon.className = 'trashIcon';
      trashIcon.id = `remove${i}`;
      trashIcon.src = Trash;
      div.appendChild(trashIcon);

      const dotsIcon = new Image();
      dotsIcon.className = 'icon';
      dotsIcon.id = `icon${i}`;
      dotsIcon.src = Dots;
      div.appendChild(dotsIcon);
      todo.appendChild(div);

      newList.appendChild(todo);
      newList.appendChild(div);
    }
  }
};
export { Tasks, display, addList };