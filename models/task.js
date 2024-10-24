import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({
    title: { type: String, required: true },
    status: { type: String, default: 'to-do' },
    dueDate: { type: Date, required: true }
});

taskSchema.methods.markAsCompleted = function () {
    this.status = 'completed';
    return this.save();
};

const Task = mongoose.model('Task', taskSchema);

export default Task;