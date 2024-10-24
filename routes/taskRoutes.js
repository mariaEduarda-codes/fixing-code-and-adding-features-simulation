import express from 'express';
import Task from "../models/task.js";
const router = express.Router();


// Criação de uma nova tarefa
router.post('/tasks', async (req, res) => {
    const { title, dueDate } = req.body;
    if (!title || !dueDate) {
        return res.status(400).json({ error: 'Title and dueDate are required' });
    }

    const parsedDueDate = new Date(dueDate);

    if (isNaN(parsedDueDate)) {
        return res.status(400).json({ error: 'Due date is invalid' });
    }

    try {
        const task = new Task({ title, dueDate });
        await task.save();
        res.status(201).json(task);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create task' });
    }
});

// Listar todas as tarefas
router.get('/tasks', async (req, res) => {
    try {
        const tasks = await Task.find();
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch tasks' });
    }
});

// Marcar tarefa como concluída
router.patch('/tasks/:id/complete', async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);
        if (!task) {
            return res.status(404).json({ error: 'Task not found' });
        }
        await task.markAsCompleted();
        res.status(200).json({ message: 'Task marked as completed' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to update task' });
    }
});

export default router;
