import './index.css';
import Display from './modules/display.js';
import Storage from './modules/localStorage.js';

const toDoItem = document.getElementById('toDoItem');

const taskStorage = new Storage();

const AppendDisplay = new Display();

const clearInputs = () => {
  toDoItem.value = '';
};

toDoItem.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    taskStorage.addEvent();
    clearInputs();
    AppendDisplay.appendItems();
  }
});
// import getBookStorage from './modules/getStorage.js';

// Declaring variables

// const myListItems = document.querySelector('.to-do-list');
// const toDoItem = document.getElementById('toDoItem');
// const clearAllBtn = document.querySelector('.my-button');

// ***********************************************

// // Handling clear all event

// const clearAll = () => {
//   const storage = getBookStorage();
//   const newTaskArray = storage.filter((task) => task.completed === false);
//   localStorage.setItem('taskList', JSON.stringify(newTaskArray));
//   recalculateIndex();
// };

// clearAllBtn.addEventListener('click', () => {
//   clearAll();
//   appendItems();
// });

// const refreshStatus = () => {
//   const storage = getBookStorage();
//   storage.forEach((stored) => {
//     stored.completed = false;
//   });
//   localStorage.setItem('taskList', JSON.stringify(storage));
//   recalculateIndex();
// };

// window.addEventListener('load', () => {
//   refreshStatus();
//   appendItems();
// });
