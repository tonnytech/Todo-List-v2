import './index.css';

// Declaring variables

const myListItems = document.querySelector('.to-do-list');
const toDoItem = document.getElementById('toDoItem');

// Get data from local storage

const getBookStorage = () => {
  let taskListStorage;
  if (JSON.parse(localStorage.getItem('taskList')) === null) {
    taskListStorage = [];
  } else {
    taskListStorage = JSON.parse(localStorage.getItem('taskList'));
  }
  return taskListStorage;
};

// Remove task from local storage

const removeFromStorage = (listIndex) => {
  const tasks = getBookStorage();
  const newTaskArray = tasks.filter(
    (task) => task.index !== parseInt(listIndex, 10),
  );
  localStorage.setItem('taskList', JSON.stringify(newTaskArray));
};

// Editing tasks

const findEditTask = (IndexToEdit, newValue) => {
  const storage = getBookStorage();
  storage.forEach((stored) => {
    if (stored.index === parseInt(IndexToEdit, 10)) {
      stored.description = newValue;
    }
  });
  localStorage.setItem('taskList', JSON.stringify(storage));
};

// Generating lists of tasks

const AddToDoListItems = (listItem) => {
  // Creating a list item

  const mainElement = document.createElement('li');
  mainElement.classList.add('to-do-pop');
  mainElement.dataset.id = listItem.index;

  // Creating  a checkbox

  const doneCheckbox = document.createElement('input');
  doneCheckbox.setAttribute('type', 'checkbox');
  doneCheckbox.checked = listItem.complete;
  doneCheckbox.classList.add('my-checkbox');
  mainElement.appendChild(doneCheckbox);

  // Creating an input type

  const toDoInput = document.createElement('INPUT');
  toDoInput.setAttribute('type', 'input');
  toDoInput.setAttribute('readonly', true);
  toDoInput.setAttribute('value', listItem.description);
  toDoInput.classList.add('to-do-input');
  toDoInput.dataset.complete_list = listItem.index;
  mainElement.appendChild(toDoInput);

  // Handling editing task event
  toDoInput.addEventListener('click', (e) => {
    toDoInput.removeAttribute('readonly');
    const IndexToEdit = e.target.dataset.complete_list;
    toDoInput.addEventListener('change', () => {
      const updatedTask = toDoInput.value;
      findEditTask(IndexToEdit, updatedTask);
      toDoInput.setAttribute('readonly', true);
    });
  });

  // Creating a delete icon

  const deleteBtn = document.createElement('i');
  deleteBtn.classList.add('fa-solid');
  deleteBtn.id = listItem.index;
  deleteBtn.classList.add('fa-ellipsis-vertical');

  // Handling delete Event

  deleteBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (deleteBtn.classList.contains('fa-trash-can')) {
      deleteBtn.parentElement.remove();
      removeFromStorage(e.target.id);
    } else {
      deleteBtn.classList.remove('fa-ellipsis-vertical');
      deleteBtn.classList.add('fa-trash-can');
    }
  });

  mainElement.appendChild(deleteBtn);

  return mainElement;
};

// Appending the generated list to the html file

const appendItems = () => {
  myListItems.innerHTML = '';
  const storage = getBookStorage();
  storage.forEach((item) => {
    const toDoItem = AddToDoListItems(item);
    myListItems.appendChild(toDoItem);
  });
};

// clear input

const clearInputs = () => {
  toDoItem.value = '';
};

// Adding tasks to local storage

const addToStorage = (item) => {
  const storage = getBookStorage();
  storage.push(item);
  localStorage.setItem('taskList', JSON.stringify(storage));
  clearInputs();
};

// A function to add a new task

const addTask = (task, complete = false, index) => {
  const toDoTask = task;
  const toDoComplete = complete;
  const toDoIndex = index;

  const newTask = {
    completed: toDoComplete,
    index: toDoIndex,
    description: toDoTask,
  };

  addToStorage(newTask);
  appendItems();
};

// Adding a new task from the input in the index.html file

const addEvent = () => {
  const taskStorage = getBookStorage();
  if (!toDoItem.value) {
    return;
  }
  addTask(toDoItem.value, false, taskStorage.length);
};

toDoItem.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    addEvent();
  }
});

window.addEventListener('load', () => {
  appendItems();
});
