import "./index.css";

// Declear variables

const myListItems = document.querySelector(".to-do-list");
const toDoItem = document.getElementById("toDoItem");

// Get data from local storage

const getBookStorage = () => {
  let taskListStorage;
  if (JSON.parse(localStorage.getItem("taskList")) === null) {
    taskListStorage = [];
  } else {
    taskListStorage = JSON.parse(localStorage.getItem("taskList"));
  }
  return taskListStorage;
};

// Generating lists of tasks

const AddToDoListItems = (listItem) => {
  const mainElement = document.createElement("li");
  mainElement.classList.add("to-do-pop");
  mainElement.dataset.id = listItem.index;

  const doneCheckbox = document.createElement("input");
  doneCheckbox.setAttribute("type", "checkbox");
  doneCheckbox.checked = listItem.complete;
  doneCheckbox.classList.add("my-checkbox");
  mainElement.appendChild(doneCheckbox);

  const toDoInput = document.createElement("INPUT");
  toDoInput.setAttribute("type", "input");
  toDoInput.setAttribute("readonly", true);
  toDoInput.setAttribute("value", listItem.description);
  toDoInput.classList.add("to-do-input");
  mainElement.appendChild(toDoInput);

  toDoInput.addEventListener("click", () => {
    toDoInput.removeAttribute("readonly");
  });

  const deleteBtn = document.createElement("i");
  deleteBtn.classList.add("fa-solid");
  deleteBtn.id = listItem.index;
  deleteBtn.classList.add("fa-ellipsis-vertical");
  deleteBtn.addEventListener('click', () => {
    deleteBtn.classList.remove('fa-ellipsis-vertical');
    deleteBtn.classList.add('fa-trash-can');
  });
  const deleteIcon = document.querySelector('.fa-trash-can');
  deleteIcon.addEventListener('click', () => {
    deleteIcon.parentElement.remove();
  });
  mainElement.appendChild(deleteBtn);

  return mainElement;
};

// Appending the generated list to the html file

const appendItems = () => {
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
  localStorage.setItem("taskList", JSON.stringify(storage));
  appendItems();
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
};

// Add a new task from the input in the html file

const addEvent = () => {
  const taskStorage = getBookStorage();
  if (!toDoItem.value) {
    return;
  }
  addTask(toDoItem.value, false, taskStorage.length);
};

toDoItem.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    addEvent();
  }
});

appendItems();
