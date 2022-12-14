import './style.css';

class todos {
  static displayToDo() {
    const todo = [];
    todo.forEach((item) => todos.addTodo(item));
  }

  static addTodo(item) {
    const list = document.querySelector('.list');
    const todoli = document.createElement('li');
    todoli.innerHTML = `
    <li class="listItems">
    <div class="description">
                <input type="checkbox" name="select" id="" class="check" />
                <p >${item.description}</p>
    </div>
                <i id="moreicon" class="fa-solid fa-ellipsis-vertical"></i>
              </li>
    `;
    list.appendChild(todoli);
  }
}

document.addEventListener('DOMContentLoaded', todos.displayToDo());
