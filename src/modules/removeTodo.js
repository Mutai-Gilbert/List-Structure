import getTodo from './getTodo.js';

const removeTodo = (removeid) => {
  const { todo: todoArray } = getTodo();
  const newList = todoArray.filter((item) => parseInt(removeid, 10) !== item.index);
  newList.forEach((task, index) => { task.index = index + 1; });
  localStorage.setItem('todo', JSON.stringify(newList));
};
export default removeTodo;
