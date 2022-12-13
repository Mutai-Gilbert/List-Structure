import './style.css';

class todos {
  static displayToDo() {
    const todo = [
      {
        description: 'Read a book',
        completed: false,
        index: 0,
      },
      {
        description: 'Read the bible',
        completed: false,
        index: 1,
      },
      {
        description: 'Write my daily plan',
        completed: false,
        index: 2,
      },
      {
        description: 'Attend Microverse Classes',
        completed: false,
        index: 3,
      },
    ];
    todo.forEach((item) => todos.addTodo(item));
  }

  static addTodo(item) {
    const list = document.querySelector('.list');
    const todoli = document.createElement('li');
    todoli.innerHTML = `
    <li class="listItems">
                <input type="checkbox" name="select" id="" class="check" />
                <p class="title">${item.description}</p>
                <i id="moreicon" class="fa-solid fa-ellipsis-vertical"></i>
              </li>
    `;
    list.appendChild(todoli);
  }
}

document.addEventListener('DOMContentLoaded', todos.displayToDo());
