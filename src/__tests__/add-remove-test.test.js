/** @jest-environment jsdom */

import { addToStorage } from "../index.js";

describe("adding task", () => {
  beforeEach(() => {
    localStorage.clear();
    jest.clearAllMocks();
    localStorage.setItem.mockClear();
    document.body.innerHTML = `
        <ul class="to-do-list">

        </ul>
        `;
  });

  const AddToDoListItems = (listItem) => {
    const mainElement = document.createElement("li");
    mainElement.classList.add("to-do-pop");
    mainElement.dataset.id = listItem.index;

    const doneCheckbox = document.createElement("input");
    doneCheckbox.setAttribute("type", "checkbox");
    doneCheckbox.classList.add("my-checkbox");
    doneCheckbox.dataset.complete_list = listItem.index;
    mainElement.appendChild(doneCheckbox);

    const toDoInput = document.createElement("INPUT");
    toDoInput.setAttribute("type", "input");
    toDoInput.setAttribute("readonly", true);
    toDoInput.setAttribute("value", listItem.description);
    toDoInput.classList.add("to-do-input");
    toDoInput.dataset.complete_list = listItem.index;
    mainElement.appendChild(toDoInput);

    const deleteBtn = document.createElement("i");
    deleteBtn.classList.add("fa-solid");
    deleteBtn.id = listItem.index;
    deleteBtn.classList.add("fa-ellipsis-vertical");

    deleteBtn.addEventListener("click", (e) => {
      e.preventDefault();
      if (deleteBtn.classList.contains("fa-trash-can")) {
        deleteBtn.parentElement.remove();
        removeFromStorage(e.target.id);
        recalculateIndex();
      } else {
        deleteBtn.classList.remove("fa-ellipsis-vertical");
        deleteBtn.classList.add("fa-trash-can");
      }
    });

    mainElement.appendChild(deleteBtn);

    return mainElement;
  };

  const getBookStorage = () => JSON.parse(localStorage.getItem("taskList")) || [];

  const appendItems = () => {
    const myListItems = document.querySelector(".to-do-list");
    const storage = getBookStorage();
    storage.forEach((item) => {
      const toDoItem = AddToDoListItems(item);
      myListItems.appendChild(toDoItem);
    });
  };

  test("Add new item to local storage", () => {
    const newTask = {
      completed: "toDoComplete",
      index: "toDoIndex",
      description: "toDoTask",
    };
    addToStorage(newTask);

    const result = JSON.parse(localStorage.getItem('taskList'));
    expect(result).toHaveLength(1);
  });
});
