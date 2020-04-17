require("dotenv").config()
const axios = require("axios")
// @HACER .env
const API_KEY = "AIzaSyAEMCfRN2U2viwt_Btj_pVVyQ7EDUM-HA8"
//https://www.googleapis.com/books/v1/volumes?q=intitle:harry+potter&maxResults=4&key= AIzaSyAEMCfRN2U2viwt_Btj_pVVyQ7EDUM-HA8
module.exports = {
    getBooks: async title => {
console.log("hit get books")
        const queryURL = `https://www.googleapis.com/books/v1/volumes?q=intitle:${title}&maxResults=4&key=${API_KEY}`

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
    }
}