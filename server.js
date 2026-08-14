const express = require("express");

const app = express();

app.use(express.json());
app.use(express.static("public"));

let tasks = [
    {
        id: 1,
        title: "Learn GitHub Actions",
        completed: false
    }
];

app.get("/api/tasks", (req, res) => {
    res.json(tasks);
});

app.post("/api/tasks", (req, res) => {

    const task = {
        id: tasks.length + 1,
        title: req.body.title,
        completed: false
    };

    tasks.push(task);

    res.status(201).json(task);
});

app.put("/api/tasks/:id", (req, res) => {

    const task = tasks.find(
        t => t.id === parseInt(req.params.id)
    );

    if (!task) {
        return res.status(404).json({
            error: "Task not found"
        });
    }

    task.completed = !task.completed;

    res.json(task);
});

app.delete("/api/tasks/:id", (req, res) => {

    const id = parseInt(req.params.id);

    tasks = tasks.filter(task => task.id !== id);

    res.json({
        message: "Task deleted"
    });
});

const PORT = process.env.PORT || 3000;

if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}

module.exports = app;