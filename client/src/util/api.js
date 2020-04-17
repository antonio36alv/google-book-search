require("dotenv").config()
const axios = require("axios")
// @HACER .env
const API_KEY = "AIzaSyAEMCfRN2U2viwt_Btj_pVVyQ7EDUM-HA8"
//https://www.googleapis.com/books/v1/volumes?q=intitle:harry+potter&maxResults=4&key= AIzaSyAEMCfRN2U2viwt_Btj_pVVyQ7EDUM-HA8
module.exports = {
    getBooks: async title => {

        const queryURL = `https://www.googleapis.com/books/v1/volumes?q=intitle:${title}&maxResults=4&key=${API_KEY}`

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