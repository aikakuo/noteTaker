const path = require('path')
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

app.use(express.static('public'))

app.use("/assets", express.static("./assets"))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())


app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "public/index.html"))
})

app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "public/notes.html"));
});


require("./routes/api-notes")(app);

app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
    })
           