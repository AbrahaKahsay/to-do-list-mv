import Dots from './modules/dots.png';
import Trash from './modules/trash-bin.png';
import Edit from './modules/edit.png';

// handles DoM elements
const addList = document.getElementById('add-list');
const newList = document.getElementById('new-list');

// Create a class for tasks
class Tasks {
    constructor(){
        this.array = [];
    }
}

// create display method to show on the DoM
const display = ()=>{
    if(localStorage.Tasks) {
        for(let i=0; i<JSON.parse(localStorage.Tasks).length; i+=1) {
            // creating a div element to store form inputs
            const div = document.createElement('div');
            const newCheck = document.createElement('input');
            const newLabel = document.createElement('input');
            const lineBreak = document.createElement('br');
            const line = document.createElement('hr');
            const dotsIcon = new Image();
            const trashIcon = new Image();
            const editIcon = new Image();
            const todo = document.createElement('div');
        }
    }
}