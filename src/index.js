import './index.css';

const myListItems = document.querySelector('.to-do-list');

const ToDoListArray = [
  {
    description: 'wash dishes',
    index: 1,
    completed: false,
  },
  {
    description: 'take breakfast',
    index: 1,
    completed: false,
  },
  {
    description: 'play football',
    index: 1,
    completed: false,
  },
];

const AddToDoListItems = (listItem) => {
  const mainElement = document.createElement('li');
  mainElement.classList.add('to-do-pop');

  const doneCheckbox = document.createElement('input');
  doneCheckbox.setAttribute('type', 'checkbox');
  doneCheckbox.checked = listItem.complete;
  doneCheckbox.classList.add('my-checkbox');
  mainElement.appendChild(doneCheckbox);

  const toDoInput = document.createElement('INPUT');
  toDoInput.setAttribute('type', 'input');
  toDoInput.setAttribute('readonly', true);
  toDoInput.setAttribute('value', listItem.description);
  toDoInput.classList.add('to-do-input');
  mainElement.appendChild(toDoInput);

  const deleteBtn = document.createElement('i');
  deleteBtn.classList.add('fa-solid');
  deleteBtn.classList.add('fa-ellipsis-vertical');
  // deleteBtn.textContent = "remove";
  mainElement.appendChild(deleteBtn);

  return mainElement;
};

ToDoListArray.forEach((book) => {
  const list = AddToDoListItems(book);
  myListItems.appendChild(list);
});
