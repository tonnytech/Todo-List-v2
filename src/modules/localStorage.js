// Get data from local storage

const toDoItem = document.getElementById('toDoItem');

class Storage {
  constructor() {
    this.getBookStorage = JSON.parse(localStorage.getItem('taskList')) || [];
  }

  static setBookStorage(arr) {
    localStorage.setItem('taskList', JSON.stringify(arr));
  }

  recalculateIndex = () => {
    const storage = this.getBookStorage;
    storage.forEach((item, itemIndex) => {
      item.index = itemIndex;
    });
    Storage.setBookStorage(storage);
  };

  completeStatus = (indexToChange, newStatus) => {
    const storage = this.getBookStorage;
    storage.forEach((stored) => {
      if (stored.index === parseInt(indexToChange, 10)) {
        stored.completed = newStatus;
      }
    });
    this.setBookStorage(storage);
    this.recalculateIndex();
  };

  removeFromStorage = (listIndex) => {
    const tasks = this.getBookStorage;
    const newTaskArray = tasks.filter(
      (task) => task.index !== parseInt(listIndex, 10),
    );
    this.setBookStorage(newTaskArray);
    this.recalculateIndex();
  };

  EditTask = (IndexToEdit, newValue) => {
    const storage = this.getBookStorage;
    storage.forEach((stored) => {
      if (stored.index === parseInt(IndexToEdit, 10)) {
        stored.description = newValue;
      }
    });
    Storage.setBookStorage(storage);
    this.recalculateIndex();
  };

  addToStorage = (item) => {
    const storage = this.getBookStorage;
    storage.push(item);
    Storage.setBookStorage(storage);
    this.recalculateIndex();
  };

  addTask = (task, complete = false, index) => {
    const toDoTask = task;
    const toDoComplete = complete;
    const toDoIndex = index;

    const newTask = {
      completed: toDoComplete,
      index: toDoIndex,
      description: toDoTask,
    };

    this.addToStorage(newTask);
  };

  addEvent = () => {
    const taskStorage = this.getBookStorage;
    if (!toDoItem.value) {
      return;
    }
    this.addTask(toDoItem.value, false, taskStorage.length);
  };
}

export default Storage;
