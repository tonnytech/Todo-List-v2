import Storage from './localStorage.js';

// Declaring variables

const myListItems = document.querySelector('.to-do-list');
const toDoItem = document.getElementById('toDoItem');

const taskStorage = new Storage();

class Display {
  constructor() {
    this.listElement = document.createElement('li');
    this.Input = document.createElement('input');
    this.Icon = document.createElement('i');
  }

  AddToDoListItems = (listItem) => {
    // Creating a list item

    const mainElement = this.listElement;
    mainElement.classList.add('to-do-pop');
    mainElement.dataset.id = listItem.index;

    const doneCheckbox = this.Input;
    doneCheckbox.setAttribute('type', 'checkbox');
    doneCheckbox.classList.add('my-checkbox');
    doneCheckbox.dataset.complete_list = listItem.index;
    mainElement.appendChild(doneCheckbox);

    doneCheckbox.addEventListener('click', (e) => {
      const IndexToEdit = e.target.dataset.complete_list;
      if (doneCheckbox.checked === true) {
        Storage.completeStatus(IndexToEdit, true);
      } else {
        Storage.completeStatus(IndexToEdit, false);
      }
    });

    const toDoInput = this.Input;
    toDoInput.setAttribute('type', 'input');
    toDoInput.setAttribute('readonly', true);
    toDoInput.setAttribute('value', listItem.description);
    toDoInput.classList.add('to-do-input');
    toDoInput.dataset.complete_list = listItem.index;
    mainElement.appendChild(toDoInput);

    toDoInput.addEventListener('click', (e) => {
      toDoInput.removeAttribute('readonly');
      const IndexToEdit = e.target.dataset.complete_list;
      toDoInput.addEventListener('change', () => {
        const updatedTask = toDoInput.value;
        Storage.EditTask(IndexToEdit, updatedTask);
        toDoInput.setAttribute('readonly', true);
        Display.appendItems();
      });
    });

    const deleteBtn = this.Icon;
    deleteBtn.classList.add('fa-solid');
    deleteBtn.id = listItem.index;
    deleteBtn.classList.add('fa-ellipsis-vertical');

    deleteBtn.addEventListener('click', (e) => {
      e.preventDefault();
      if (deleteBtn.classList.contains('fa-trash-can')) {
        deleteBtn.parentElement.remove();
        Storage.removeFromStorage(e.target.id);
        Display.appendItems();
      } else {
        deleteBtn.classList.remove('fa-ellipsis-vertical');
        deleteBtn.classList.add('fa-trash-can');
      }
    });

    mainElement.appendChild(deleteBtn);

    return mainElement;
  };

  appendItems = () => {
    myListItems.innerHTML = '';
    const storage = taskStorage.getBookStorage;
    storage.forEach((item) => {
      const toDoListItem = this.AddToDoListItems(item);
      myListItems.appendChild(toDoListItem);
    });
  };
}

toDoItem.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    taskStorage.addEvent();
  }
});

export default Display;
