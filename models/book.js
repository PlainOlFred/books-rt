const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = Schema({
    title:{
        type: String
    },
    subtitle:{
        type: String
    },
    authors: {
        type: [String]
    },
    desc: {
        type: String
    },
    image: {
        type: String
    }, googleId: {
        type: String,
        unique: true
    }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;