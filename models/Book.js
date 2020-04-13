const mongoose = require("mongoose")

const Schema = mongoose.Schema

export default BookSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    authors: [
        {
            type:
                String
        }
        //probably change to an array, since a book can
        //have mutliple authors, also a book can have no
        //authors like lores
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
    },
})
/*
* `title` - Title of the book from the Google Books API
* `authors` - The books's author(s) as returned from the Google Books API
* `description` - The book's description as returned from the Google Books API
* `image` - The Book's thumbnail image as returned from the Google Books API
* `link` - The Book's information link as returned from the Google Books API
********************************************************
Creating `documents` in your `books` collection similar to the following:
    ```js
    {
      authors: ["Suzanne Collins"]
      description: "Set in a dark vision of the near future, a terrifying reality TV show is taking place. Twelve boys and twelve girls are forced to appear in a live event called The Hunger Games. There is only one rule: kill or be killed. When sixteen-year-old Katniss Everdeen steps forward to take her younger sister's place in the games, she sees it as a death sentence. But Katniss has been close to death before. For her, survival is second nature."
      image: "http://books.google.com/books/content?id=sazytgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
      link: "http://books.google.com/books?id=sazytgAACAAJ&dq=title:The+Hunger+Games&hl=&source=gbs_api"
      title: "The Hunger Games"
    }
*/