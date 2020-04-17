const path = require("path")
const router = require("express").Router();

const bookController = require("../controllers/booksController")

const PUB_DIR = path.resolve(__dirname, "../client/build")

module.exports = function(app) {

    // app.get("/api/books", (req, res) => {

    //     bookController.findAll
    // })

    // app.post("/#/api/books", (req, res) => {
    app.post("/api/books", (req, res) => {
        console.log("setgo")
        console.log(req.body)
        bookController.create(req, res)
    })

    // app.delete("/api/books/:id", (req, res) => {

    //     const id = req.params.id

    //     // bookController.create()

    // })

    // app.get("*", (req, res) => {
    //     res.sendFile(path.join(PUB_DIR, "index.html"))
    // })
}