import editTodo from './editTodo.js';

const showEditTools = () => {
  // get all elements with the class "menu"
  const editTools = document.querySelectorAll('.menu');
  // attach a click event listener to each element
  editTools.forEach((myelem) => {
    myelem.addEventListener('click', (e) => {
      e.preventDefault();
      // get the menu and bin icons
      const menuchild = myelem.firstElementChild;
      menuchild.style.display = 'none';
      const binchild = myelem.lastElementChild;
      binchild.style.display = 'block';
      // hide the menu icon and show the bin icon
      const parentdiv = binchild.parentElement.parentElement;
      // get the input element containing the to-do-task
      const inputDiv = parentdiv.children[1];
      // enable the editing of the input element
      inputDiv.removeAttribute('readonly');
      const end = inputDiv.value.length;
      inputDiv.setSelectionRange(end, end);
      inputDiv.focus();
      // call the editTodo function to handle updating the to-do task
      editTodo(inputDiv);
    });
  });
};
export default showEditTools;