// This function retrieves a todo list from local storage.
// It checks if the todo item exists in local storage,
// and if not it initializes it as an empty array.
// It then retrieves the item from local storage and parses it into a JavaScript object.
// Finally, it returns an object containing the todo list and the size of the todo list.
const getTodo = () => {
  const todo = localStorage.getItem('todo')
    ? JSON.parse(localStorage.getItem('todo'))
    : [];
  const todoSize = todo.length;
  return { todo, todoSize };
};
export default getTodo;
