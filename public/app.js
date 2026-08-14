async function loadTasks() {

    const response = await fetch("/api/tasks");

    const tasks = await response.json();

    const list = document.getElementById("taskList");

    list.innerHTML = "";

    tasks.forEach(task => {

        const li = document.createElement("li");

        li.innerHTML = `
            ${task.completed ? "✅" : "⬜"}
            ${task.title}

            <button onclick="completeTask(${task.id})">
                Complete
            </button>

            <button onclick="deleteTask(${task.id})">
                Delete
            </button>
        `;

        list.appendChild(li);
    });
}


async function addTask() {

    const input = document.getElementById("taskInput");

    if (!input.value.trim()) {
        return;
    }

    await fetch("/api/tasks", {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            title: input.value
        })
    });

    input.value = "";

    loadTasks();
}


async function completeTask(id) {

    await fetch(`/api/tasks/${id}`, {
        method: "PUT"
    });

    loadTasks();
}


async function deleteTask(id) {

    await fetch(`/api/tasks/${id}`, {
        method: "DELETE"
    });

    loadTasks();
}


loadTasks();