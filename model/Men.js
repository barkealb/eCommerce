const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const menSchema = new Schema({
    title: {
        type: String, 
        required: true
    }, 
    price : {
        type: Number,
        required: true
    }, 
    image: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Men',menSchema)