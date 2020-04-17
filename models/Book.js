const mongoose = require("mongoose")
const Schema = mongoose.Schema

const BookSchema = new Schema({

    title: {
        type: String,
        required: true
    },
    authors: [
        {
            type: String
        }
    ],
    descritpion: {
        type: String,
        required: false
    },
    imageLink: {
        type: String,
        required: false
    },
    infoLink: {
        type: String,
        required: false
    }
})

const Book = mongoose.model("Book", BookSchema)

module.exports = Book