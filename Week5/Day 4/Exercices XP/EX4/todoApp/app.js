import { TodoList } from './todo.js';
const myTodoList = new TodoList();

function displayTasks() {
  console.log('\n--- LISTE DES TÂCHES ---');
  console.log(myTodoList.listTasks());
  console.log('------------------------\n');
}

try {

  console.log(myTodoList.addTask('Acheter du lait'));
  console.log(myTodoList.addTask('Faire les exercices JavaScript'));
  console.log(myTodoList.addTask('Appeler le médecin'));
  displayTasks();


  console.log(myTodoList.markAsCompleted(0));

  displayTasks();

  console.log(myTodoList.removeTask(1)); 


  displayTasks();

} catch (error) {
  console.error('Erreur:', error.message);
}