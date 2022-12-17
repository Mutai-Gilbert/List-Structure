import getTodo from './getTodo.js';

const editToDo = (inputDiv) => {
  const input = inputDiv;
  const setReadOnly = input.parentElement.children[1];

  input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const description = input.value;
      const inputId = input.id;
      const list = getTodo();
      const todoArray = list.todo;
      const index = inputId.replace('input', '');
      const newList = todoArray.filter((item) => parseInt(index, 10) !== item.index);
      if (description !== '') {
        const mtIndex = parseInt(index, 10);
        const todoObject = { description, completed: false, index: mtIndex };
        newList.push(todoObject);

        localStorage.setItem('todo', JSON.stringify(newList));
        window.location.reload();
        setReadOnly.setAttribute('readonly', 'true');
      } else {
        document.querySelector('.emptylist').style.display = 'block';
      }
    }
  });
};
export default editToDo;
