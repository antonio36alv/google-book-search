require("dotenv").config()
const axios = require("axios")
// @HACER .env
const API_KEY = "AIzaSyAEMCfRN2U2viwt_Btj_pVVyQ7EDUM-HA8"
//https://www.googleapis.com/books/v1/volumes?q=intitle:harry+potter&maxResults=4&key= AIzaSyAEMCfRN2U2viwt_Btj_pVVyQ7EDUM-HA8
module.exports = {


    getBooks: title => {
console.log("hit get books")
        const queryURL = `https://www.googleapis.com/books/v1/volumes?q=intitle:${title}&maxResults=4&key=${API_KEY}`

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        const data = axios.get(queryURL)
        const { items } = data.data
        
        //     for (let item of items) bookResults.push({
            //         id: item.id,
            //         title: item.volumeInfo.title,
            //         authors: item.volumeInfo.authors,
            //         description: item.volumeInfo.description,
            //         imageLink: item.volumeInfo.imageLinks.thumbnail,
            //         infoLink: item.volumeInfo.infoLink
            //     })
        return axios.get(queryURL)
    },
    savedBooks: () => {
        return axios.get("/api/books")
    },
    saveBook: book => {
        console.log(book)
        console.log("saveBook")
        return axios.post("/api/books", book)
    },
    removeBook: id => {
        return axios.delete(`/api/books/${id}`)
            
=======
            for (let item of items) bookResults.push({
                title: item.volumeInfo.title,
                authors: item.volumeInfo.authors,
                descritpion: item.description,
                imageLink: item.volumeInfo.imageLinks.thumbnail,
                infoLink: item.volumeInfo.infoLink
            })
        
        })
        return bookResults
>>>>>>> parent of 5ab87a0... properly using callback fucntions for axios call
=======
            for (let item of items) bookResults.push({
                title: item.volumeInfo.title,
                authors: item.volumeInfo.authors,
                descritpion: item.description,
                imageLink: item.volumeInfo.imageLinks.thumbnail,
                infoLink: item.volumeInfo.infoLink
            })
        
        })
        return bookResults
>>>>>>> parent of 5ab87a0... properly using callback fucntions for axios call
=======
            for (let item of items) bookResults.push({
                title: item.volumeInfo.title,
                authors: item.volumeInfo.authors,
                descritpion: item.description,
                imageLink: item.volumeInfo.imageLinks.thumbnail,
                infoLink: item.volumeInfo.infoLink
            })
        
        })
        return bookResults
>>>>>>> parent of 5ab87a0... properly using callback fucntions for axios call
    }
}
// function getBook(title) {
//     const queryURL = `https://www.googleapis.com/books/v1/volumes?q=intitle=${title}+maxResults=4/&key=${API_KEY}`

//     axios.get(queryURL).then(data => {

//         console.log(data)
//         const { items } = data.data

//         for (let item of items) console.log(`${item.volumeInfo.title}

// ${item.volumeInfo.authors}

// ${item.volumeInfo.description}

// ${item.volumeInfo.imageLinks.thumbnail}

// ${item.volumeInfo.infoLink}`)
// })
// }

// getBook("the+mist")