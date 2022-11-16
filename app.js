const express = require('express')
const app = express();
const tasks = require('./routes/tasks')
const connectDB = require('./database/connect')
require('dotenv').config();
const notFound = require('./middleware/not-found');

// Middleware
app.use(express.static('./public'))
app.use(express.json())


// Routes
app.use('/api/v1/tasks',tasks)

app.use(notFound)

// app.get('/api/v1/tasks')
// app.post('/api/v1/tasks')
// app.get('/api/v1/tasks/:id')
// app.patch('/api/v1/:id')
// app.delete('/apd  ')



const PORT = 3000

const start = async ()=>{
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(PORT,console.log(`Server is listening on port ${PORT}...`))
    } catch (error) {
        console.log(error);
    }
}

start();