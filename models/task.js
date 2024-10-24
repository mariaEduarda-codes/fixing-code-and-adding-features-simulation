import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: String,
    status: { type: String, default: 'to-do' },
    dueDate: { type: Date, required: true }
});

taskSchema.methods.markAsCompleted = function () {
    this.status = 'completed';
    return this.save();
};

taskSchema.methods.markAsInProgress = function () {
    this.status = 'in-progress';
    return this.save();
};

taskSchema.methods.setNewTitle = function (title) {
    this.title = title;
    return this.save();
};

taskSchema.methods.setNewDescription = function (description) {
    this.description = description;
    return this.save();
};

taskSchema.methods.setNewTitleAndDescription = function (title, description) {
    this.title = title;
    this.description = description;
    return this.save();
};

const Task = mongoose.model('Task', taskSchema);

export default Task;