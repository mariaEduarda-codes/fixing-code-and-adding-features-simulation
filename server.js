const express = require('express');
const mongoose = require('mongoose');
const taskRoutes = require('./routes/taskRoutes');

const app = express();
app.use(express.json());

app.use('/api', taskRoutes);

// Conexão com o MongoDB
mongoose.connect('mongodb://localhost:27017/taskmanager', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((error) => {
    console.log('Failed to connect to MongoDB:', error);
});

// BUG: A aplicação não está escutando na porta correta
const PORT = process.env.PORT || 3000;
app.listen(3000, () => {
    console.log(`Server is running on port ${PORT}`); // BUG: Aqui deve exibir a porta correta
});
