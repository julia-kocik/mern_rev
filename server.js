require('dotenv').config({path: "./config.env"});
const express = require('express');
const connectDB = require('./config/db');
const errorHandler = require('./middleware/error')

// Connect DB
connectDB();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }))
app.use('/api/auth', require('./routes/auth'));
app.use('/api/private', require('./routes/private'));
app.use('/api/private/sessions', require('./routes/private'));
app.use('/api/private/sessions/:id', require('./routes/private'));

//Error Handler should be last piece of middleware;
app.use(errorHandler)

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => console.log(`Server is running on ${PORT}`));

process.on("unhandledRejection", (err, promise) => {
    console.log(err);
    server.close(() => process.exit(1));
})