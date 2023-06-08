const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const kidsSchema = new Schema({
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

module.exports = mongoose.model('Kids',kidsSchema)