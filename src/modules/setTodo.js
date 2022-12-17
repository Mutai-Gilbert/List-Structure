import getTodo from './getTodo.js';

// Sets a setTodo function that is used to save a new todo item in local storage.
// Takes in a newTodo parameter which is a 'TodoList' instance containing
// the details of the new item.
// Uses the getTodo function to retrieve the current todo list from local storage.
// Adds the newTodo item to the todo list and saves the updated list in local storage
// using the localStorage.setItem method. Takes in the todo key and the updated

const setTodo = (newTodo) => {
  const { todo: todoArray } = getTodo();
  todoArray.push(newTodo);
  localStorage.setItem('todo', JSON.stringify(todoArray));
};

export default setTodo;
