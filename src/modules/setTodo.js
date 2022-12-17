import getTodo from './getTodo.js';
// Sets a setTodo function that is used to save a new todo item in local storage.
// Takes in a newTodo parameter which is a 'TodoList' instance conatining
// the details of the new item.
// uses the getTodo function to retrieve the current todo list from local storage.
//  adds the newTodo item to the todo list, and saves the updated
// list in local storage using the localStorage.setItem method
// takes in the todo key and the updated todo list as a JSON string,
//  and saves them in local storage.

const setTodo = (newTodo) => {
  const todoArray = getTodo().todo;
  todoArray.push(newTodo);
  localStorage.setItem('todo', JSON.stringify(todoArray));
};

export default setTodo;