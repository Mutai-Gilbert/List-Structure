import getTodo from './getTodo.js';

// This function sets up an event listener for the 'Clear completed' button.
// When clicked, it removes all completed to-do items from the list and
// updates the list in local storage.
const clearComplete = () => {
  // Get the 'Clear completed' button
  const clearButton = document.getElementById('clear-complete');
  // Attach a click event listener to the button
  clearButton.addEventListener('click', () => {
    // Get the list of to-do items from local storage
    const { todo: todos } = getTodo();
    // Filter out the completed to-do items
    const newlist = todos.filter((item) => item.completed !== true);
    // Update the list in local storage
    localStorage.setItem('todo', JSON.stringify(newlist));
    // Reload the page to reflect the updated list
    window.location.reload();
  });
};
export default clearComplete;
