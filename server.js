require('dotenv').config({path: "./config.env"});
const express = require('express');
const connectDB = require('./config/db');
const errorHandler = require('./middleware/error')
const cors = require('cors');
const path = require('path');

connectDB();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }))
app.use('/api/auth', require('./routes/auth'));
app.use('/api/private', require('./routes/private'));
app.use('/api/private/sessions', require('./routes/private'));

app.use(errorHandler)

const PORT = process.env.PORT || 5000;

/* REACT WEBSITE */
if(process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, '/client/build')));
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '/client/build/index.html'));
    });
} else {
    app.get("/", (req, res) => {
        res.send("Api running");
    });
}


  

const server = app.listen(process.env.PORT || 5000, () => console.log(`Server is running on ${PORT}`));

process.on("unhandledRejection", (err, promise) => {
    console.log(err);
    server.close(() => process.exit(1));
})