export class TodoList {
    constructor() {
      this.tasks = [];
    }
  
    /**
     * Ajoute une nouvelle tâche
     * @param {string} task - La description de la tâche
     */
    addTask(task) {
      if (typeof task !== 'string' || task.trim() === '') {
        throw new Error('La tâche doit être une chaîne non vide');
      }
      this.tasks.push({
        description: task,
        completed: false,
        createdAt: new Date()
      });
      return `Tâche ajoutée: "${task}"`;
    }
  
    /**
     * Marque une tâche comme complétée
     * @param {number} index - L'index de la tâche
     */
    markAsCompleted(index) {
      if (index < 0 || index >= this.tasks.length) {
        throw new Error('Index de tâche invalide');
      }
      this.tasks[index].completed = true;
      return `Tâche marquée comme complétée: "${this.tasks[index].description}"`;
    }
  
    /**
     * Liste toutes les tâches
     */
    listTasks() {
      if (this.tasks.length === 0) {
        return 'Aucune tâche dans la liste';
      }
  
      return this.tasks.map((task, index) => {
        const status = task.completed ? '✓' : '✗';
        return `${index + 1}. [${status}] ${task.description} (ajoutée le ${task.createdAt.toLocaleDateString()})`;
      }).join('\n');
    }
  
    /**
     * Supprime une tâche
     * @param {number} index - L'index de la tâche
     */
    removeTask(index) {
      if (index < 0 || index >= this.tasks.length) {
        throw new Error('Index de tâche invalide');
      }
      const removedTask = this.tasks.splice(index, 1)[0];
      return `Tâche supprimée: "${removedTask.description}"`;
    }
  }