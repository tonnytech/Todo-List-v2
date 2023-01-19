import './index.css';

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

const myListItems = document.querySelector('.myListItems');

ToDoListArray.forEach((object) => {
  myListItems.innerHTML += `
<div class="ListItems">
                <span class="addedList"> <input type="checkbox"> <input type="text" value =${object.description}/></span>
                <span>icon</span>
            </div>
`;
});
