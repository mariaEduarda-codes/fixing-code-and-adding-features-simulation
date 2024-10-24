import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({
    title: { type: String, required: true },
    status: { type: String, default: 'to-do' },
    dueDate: { type: Date, required: true }
});

//Esse mét-odo não está funcionando corretamente
taskSchema.methods.markAsCompleted = function () {
    this.status = 'completed';
    return this.save(); // BUG: Não está salvando corretamente
};

const Task = mongoose.model('Task', taskSchema);

export default Task;