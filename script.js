const todoInput = document.getElementById('todo-input');
const todoDate = document.getElementById('todo-date');
const todoTime = document.getElementById('todo-time');
const todoList = document.getElementById('todo-list');

function addTodo() {
    const task = todoInput.value;
    const date = todoDate.value;
    const time = todoTime.value;

    if (task === '' || date === '' || time === '') {
        alert('Please enter all fields');
        return;
    }

    const todoItem = document.createElement('li');
    todoItem.className = 'todo-item';
    const taskText = document.createElement('span');
    taskText.textContent = `${task} - ${date} ${time}`;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = function() {
        todoList.removeChild(todoItem);
    };

    todoItem.appendChild(taskText);
    todoItem.appendChild(deleteButton);

    todoList.appendChild(todoItem);

    todoInput.value = '';
    todoDate.value = '';
    todoTime.value = '';

    setReminder(task, date, time);
}

function setReminder(task, date, time) {
    const taskDate = new Date(`${date}T${time}`);
    const now = new Date();

    const timeToTask = taskDate - now;
    if (timeToTask < 0) return; // Time is already past

    setTimeout(() => {
        alert(`Reminder: ${task} at ${time} on ${date}`);
    }, timeToTask);
}
