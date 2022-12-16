import getTodo from './getTodo.js';

const selectedTasks = () => {
  // get the list of to-do items from local storage
  const todos = getTodo().todo;
  // get all checkbox elements
  const checkboxes = document.querySelectorAll('input[name=checkbox]');
  // attach a change event listener to each checkbox
  checkboxes.forEach((box) => {
    box.addEventListener('change', (e) => {
      e.preventDefault();
      // get the ID of the checkbox
      const checkboxId = e.target.id.replace('checkbox-', '');
      // convert the checkbox ID to a number
      const checkboxIdInt = parseInt.apply(checkboxId, 10);
      // if the box is checked
      const parentdiv = box.parentElement;
      // get paragraph that contains task name
      const checkboxTask = parentdiv.children[1];
      // if the box is checked, mark the corresponding to-do item as completed
      if (box.checked) {
        // get the paragraph containing the task name
        checkboxTask.classList.add('checked');
        // update the items in the todo-list
        const newar = todos.map((obj) => {
          if (checkboxIdInt === obj.index) {
            return { ...obj, completed: true };
          }
          return obj;
        });
        localStorage.setItem('todo', JSON.stringify(newar));
        window.location.reload();
      } else {
        checkboxTask.classList.remove('checked');
        const newarray = todos.map((item) => {
          if (checkboxIdInt === item.index) {
            return { ...item, completed: false };
          }
          return item;
        });
        localStorage.setItem('todo', JSON.stringify(newarray));
        window.location.reload();
      }
    });
  });
};
export default selectedTasks;