const express = require("express")
const app = express()

const PORT = process.env.PORT || 3001

app.use(express.urlencoded({ extended: true}))
app.use(express.json())

if(process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"))
}

require("./routes/html-routes")(app)
require("./routes/mongo-routes")(app)

app.listen(PORT, () => console.log(`Listening on Port:${PORT}`))

module.exports = app