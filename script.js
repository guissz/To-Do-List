const taskInput = document.querySelector('.task-input');
const btnAddTask = document.querySelector('.btn-add-task');
const taskList = document.querySelector('.to-do-list-body ul');

function adicionarTarefa() {
    const taskValue = taskInput.value.trim();

    if(taskValue === '') {
        alert('Digite uma tarefa!');
        return;
    }

    const newTask = document.createElement('li');

    newTask.innerHTML = `${taskValue}<button><i class="bi bi-trash3"></i></button><input type="checkbox">`;
    taskList.appendChild(newTask);
    taskInput.value = '';
}

btnAddTask.addEventListener('click', adicionarTarefa);

taskInput.addEventListener('keypress', function(e) {
    if(e.key === 'Enter') {
        adicionarTarefa();
    }
})

taskList.addEventListener('click', function(e) {
    const targetElement = e.target;

    if(targetElement.closest('button')) {
        const task = targetElement.closest('li');
        task.remove();
        return;
    }

    if(targetElement.type === 'checkbox') {
        const task = targetElement.closest('li');

        if(targetElement.checked) {
            task.classList.add('completed');
        } else {
            task.classList.remove('completed');
        }
    }
})