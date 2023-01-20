import './index.css';

const myListItems = document.querySelector('.to-do-list');
const toDoItem = document.getElementById('toDoItem');

const ToDoListArray = [
  {
    description: 'wash dishes',
    index: 1,
    completed: false,
  },
  {
    description: 'take breakfast',
    index: 2,
    completed: false,
  },
  {
    description: 'play football',
    index: 3,
    completed: false,
  },
];

const getBookStorage = () => {
  let taskListStorage;
  if (JSON.parse(localStorage.getItem('taskList')) === null) {
    taskListStorage = [];
  } else {
    taskListStorage = JSON.parse(localStorage.getItem('taskList'));
  }
  return taskListStorage;
};

const addTask = (task, complete = false, index) => {
  const toDoTask = task;
  const toDoComplete = complete;
  const toDoIndex = index;

  localStorage.setItem(
    'taskList',
    JSON.stringify({
      completed: toDoComplete,
      index: toDoIndex,
      description: toDoTask,
    }),
  );
};

const addEvent = () => {
  addTask(toDoItem.value, false, )
}

const AddToDoListItems = (listItem) => {
  const mainElement = document.createElement('li');
  mainElement.classList.add('to-do-pop');
  mainElement.dataset.id = listItem.index;

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

  toDoInput.addEventListener('click', () => {
    toDoInput.removeAttribute('readonly');
  });

  toDoInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const updatedTask = toDoInput.value;
    }
  });

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
