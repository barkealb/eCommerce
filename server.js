const express = require('express');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');
const path = require("path");
require('dotenv').config()

//Middleware

app.use(express.json());
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, "client", "build")))

//Routes

app.use('/men', require('./routes/menRouter.js'));
app.use('/women', require('./routes/womenRouter.js'));
app.use('/kids', require('./routes/kidsRouter.js'));


//Connect to DB

mongoose.connect(process.env.MONGO_URL,
    () => console.log('Connected to Database'))


//Error Handling

app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

//Listener

app.listen(9000, () => {
    console.log('Listening on port 9000');
});