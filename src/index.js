import './style.css';
import refreshImg from './images/replace-24.png';
import addToBtn from './modules/addTodo.js';
import clickRemoveTodo from './modules/clickRemove.js';
import showEditTools from './modules/showEditTools.js';
import renderAddedList from './modules/renderList.js';
import getTodo from './modules/getTodo.js';
import strikeCheckedItems from './modules/strikeCheckedItems.js';
import clearComplete from './modules/clearComplete.js';

// initialize event listeners
addToBtn();
showEditTools();
clickRemoveTodo();
strikeCheckedItems();
clearComplete();

// Render the list of the to-do items on the page
const displayLists = () => {
  const todos = getTodo().todo;
  todos.forEach((item) => { renderAddedList(item); });
};
displayLists();
const imageRefresh = () => {
  const element = document.querySelector('.refresh');

  const myIcon = new Image();
  myIcon.src = refreshImg;

  element.appendChild(myIcon);
  return element;
};

const refresh = imageRefresh();
refresh.addEventListener('click', () => {
  window.location.reload();
});
