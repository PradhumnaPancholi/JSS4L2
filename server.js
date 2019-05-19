const express = require("express")
const app = express()

// index route//
app.get("/", function(req, res) {
    res.send("this is working")
})

app.listen(3000)

