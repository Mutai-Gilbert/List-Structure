import removeTodo from './removeTodo.js';

// This function sets up event listeners for the delete icons on each to-do item.
// When clicked, it removes the corresponding to-do item from the list
//  and updates the list in local storage.
const clickRemoveTodo = () => {
  // Get all delete icons
  const deleteBtn = document.querySelectorAll('.bin');
  // Attach a click event listener to each delete icon
  deleteBtn.forEach((element) => {
    element.addEventListener('click', (e) => {
      e.preventDefault();
      // Get the delete icon and the ID of the to-do item
      const binBtn = e.target;
      const removeid = e.target.id;
      // Remove the to-do item from the list and update the list in local storage
      removeTodo(removeid);
      // Remove the to-do item from the page
      binBtn.parentElement.parentElement.parentElement.remove();
      window.location.reload();
    });
  });
};
export default clickRemoveTodo;
