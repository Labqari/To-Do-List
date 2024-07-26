document.getElementById('add-task-btn').addEventListener('click', function() {
    let taskInput = document.getElementById('new-task');
    let taskText = taskInput.value.trim();

    if (taskText !== '') {
        let li = document.createElement('li');
        li.innerHTML = `
            ${taskText}
            <button class="delete-btn">Delete</button>
        `;

        document.getElementById('task-list').appendChild(li);

        taskInput.value = '';

        let deleteBtn = li.querySelector('.delete-btn');
        deleteBtn.addEventListener('click', function() {
            li.remove();
        });
    }
});

document.getElementById('new-task').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        document.getElementById('add-task-btn').click();
    }
});
