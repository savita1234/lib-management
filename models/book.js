const mongoose = require ('mongoose');
const schema = mongoose.schema;

const bookSchema =new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    author:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model('book', bookSchema);