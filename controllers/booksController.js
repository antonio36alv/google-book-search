const db = require("../models")

// Defining methods for the booksController
module.exports = {
  findAll: function(req, res) {
    db.Book
      .find(req.query)
      .then(dbModel => res.json(dbModel))
  },
  create: function(req, res) {
    console.log("herrr")
    db.Book
      .create(req.body)
      .then(dbModel => res.json(dbModel))
  },
  remove: function(req, res) {
    db.Book
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
  }
}