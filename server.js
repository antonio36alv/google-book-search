<<<<<<< HEAD
const express = require("express")

const mongoose = require("mongoose")
const app = express()

const PORT = process.env.PORT || 3001

app.use(express.urlencoded({ extended: true}))
app.use(express.json())

if(process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"))
}

require("./routes/mongo-routes")(app)

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks", { useNewUrlParser: true})

app.listen(PORT, () => console.log(`Listening on Port:${PORT}`))
=======
>>>>>>> parent of db151a8... basic functionallity
