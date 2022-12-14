import Task from './Task.js';


// newTask.js

export default class Task {
    constructor(description, completed = false, index = 0) {
      this.description = description;
      this.completed = completed;
      this.index = index;
    }
  }
  
  class ToDoList {
    constructor() {
      this.list = [];
    }
  
    // Adds a new task to the list
    addTask(description) {
      const task = new Task(description, false, this.list.length + 1);
      this.list.push(task);
      this.saveToLocalStorage();
    }
  
    // Deletes a task from the list
    deleteTask(index) {
      this.list = this.list.filter((task) => task.index !== index);
      // Update the indexes of remaining tasks to match their current order
      this.list.forEach((task, i) => {
        task.index = i + 1;
      });
      this.saveToLocalStorage();
    }
  
    // Edits the description of a task
    editTask(index, newDescription) {
      const task = this.list.find((task) => task.index === index);
      if (task) {
        task.description = newDescription;
      }
      this.saveToLocalStorage();
    }
  
    // Saves the list to local storage
    saveToLocalStorage() {
      localStorage.setItem('toDoList', JSON.stringify(this.list));
    }
  }
  