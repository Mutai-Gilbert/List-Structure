import TodoList from './todoList.js';
import getTodo from './getTodo.js';
import setTodo from './setTodo.js';
import renderAddedList from './renderList.js';

// This code  defines an addToBtn function that is used to add a new todo item to a todo list.
// When the function is called,it adds an event listener to the input element with the class input.
// When the user presses the Enter key while the input element is focused, the event listener is
// triggered.

const addTodoBtn = () => {
  const input = document.querySelector('.save-todo');
  input.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      const description = document.querySelector('.save-todo').value;
      const completed = false;
      const list = getTodo();
      const index = list.todoSize + 1;
      if (description !== '') {
        const todoList = new TodoList(description, completed, index);
        setTodo(todoList);
        renderAddedList(todoList);
        // window.location.reload();
        document.querySelector('.save-todo').value = '';
      } else {
        document.querySelector('.emptylist').style.display = 'block';
      }
    }
  });
};
export default addTodoBtn;
