import clickRemoveTodo from './clickRemove.js';
import strikeCheckedItems from './strikeCheckedItems.js';
import showEditTools from './showEditTools.js';
import threeDot from '../images/three-dot-24.png';
import trash from '../images/trash-24.png';

const renderAddedList = (addedList) => {
  const list = addedList;
  const listContainer = document.querySelector('.todo-list');
  const isCompleted = list.completed === true ? 'checked' : '';
  const completed = list.completed === true ? '-done' : '';
  listContainer.innerHTML += `
    <div class="list-group">
        <div class="list-cont d-flex justify-content-center align-items-center m-2">
            <input type="checkbox" name="checkbox" class="checkboxlabel border-0 text-lg" id="checkbox-${list.index}" ${isCompleted}>
            <input type="text" readonly="true" class="checkbox-task ${isCompleted} border-0 text-lg" id="input${list.index}" value="${list.description}">
            <div class="menu${completed}"><img src="${threeDot}" class="menu-img" id="menu-${list.index}"> <img src="${trash}" class="bin" id="${list.index}"></div>
            </div>
        </div>
    
    `;
  showEditTools();
  clickRemoveTodo();
  strikeCheckedItems();
};
export default renderAddedList;