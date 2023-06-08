const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const womenSchema = new Schema({
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

module.exports = mongoose.model('Women',womenSchema)