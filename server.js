const path = require('path')
const express = require('express')
const app = express()
const PORT = 3000

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())


app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "public/notes.html"))
})

app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "public/index.html"))
})



app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
    })
           