document.addEventListener('DOMContentLoaded', function() {
    const taskForm = document.getElementById('taskForm');
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
    const clearBtn = document.getElementById('clearBtn');
    
    let tasks = [];
    let taskId = 0;

    taskForm.addEventListener('submit', function(e) {
        e.preventDefault();
        addTask();
    });

    clearBtn.addEventListener('click', function() {
        tasks = [];
        taskList.innerHTML = '';
    });

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === '') {
            alert('Please enter a task');
            return;
        }
        const task = {
            id: taskId++,
            text: taskText,
            done: false
        };

        tasks.push(task);
        renderTask(task);
        taskInput.value = '';
    }

    function renderTask(task) {
        const taskItem = document.createElement('div');
        taskItem.className = 'task-item';
        taskItem.setAttribute('data-task-id', task.id);

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.className = 'task-checkbox';
        checkbox.checked = task.done;
        checkbox.addEventListener('change', function() {
            doneTask(task.id, this.checked);
        });

        const label = document.createElement('span');
        label.className = 'task-text';
        label.textContent = task.text;
        if (task.done) {
            label.classList.add('completed');
        }

        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete-btn';
        deleteBtn.innerHTML = '<i class="fas fa-times"></i>';
        deleteBtn.addEventListener('click', function() {
            deleteTask(task.id);
        });

        taskItem.appendChild(checkbox);
        taskItem.appendChild(label);
        taskItem.appendChild(deleteBtn);

        taskList.appendChild(taskItem);
    }

    function doneTask(taskId, isDone) {
        const task = tasks.find(t => t.id === taskId);
        if (task) {
            task.done = isDone;
            const taskElement = document.querySelector(`[data-task-id="${taskId}"]`);
            if (taskElement) {
                const textElement = taskElement.querySelector('.task-text');
                if (isDone) {
                    textElement.classList.add('completed');
                } else {
                    textElement.classList.remove('completed');
                }
            }
        }
    }

    function deleteTask(taskId) {
        tasks = tasks.filter(task => task.id !== taskId);
        const taskElement = document.querySelector(`[data-task-id="${taskId}"]`);
        if (taskElement) {
            taskElement.remove();
        }
    }
});