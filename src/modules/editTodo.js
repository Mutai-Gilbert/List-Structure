import getTodo from './getTodo.js';

// This function handles updating a to-do item when it is edited.
// It takes in an inputDiv parameter, which is the input element containing the to-do task.
// It listens for a keypress event and if the key pressed is Enter, it updates the to-do item.
const editToDo = (inputDiv) => {
  // Get the input element and the read-only input element containing the to-do task
  const input = inputDiv;
  const setReadOnly = input.parentElement.children[1];

  // Add a keypress event listener to the input element
  input.addEventListener('keypress', (e) => {
    // If the key pressed is Enter, update the to-do item
    if (e.key === 'Enter') {
      e.preventDefault();
      const description = input.value;
      const inputId = input.id;
      const { todo: todoArray } = getTodo();
      // Filter out the to-do item being edited from the to-do list
      const index = inputId.replace('input', '');
      const newList = todoArray.filter((item) => parseInt(index, 10) !== item.index);
      // If the to-do task is not empty, update the to-do list and save it to local storage
      if (description !== '') {
        const mtIndex = parseInt(index, 10);
        const todoObject = { description, completed: false, index: mtIndex };
        newList.push(todoObject);
        localStorage.setItem('todo', JSON.stringify(newList));
        window.location.reload();
        setReadOnly.setAttribute('readonly', 'true');
      } else {
        // If the to-do task is empty, display an error message
        document.querySelector('.emptylist').style.display = 'block';
      }
    }
  });
};
export default editToDo;
