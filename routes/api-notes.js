const fs = require("fs");
const data = JSON.parse(fs.readFileSync("/db.json", "utf8"));


module.exports = function(app) {

    app.get("/api/notes", function(req, res) {
       
        res.json(data);

    });

    app.get("/api/notes/:id", function(req, res) {

        res.json(data[Number(req.params.id)]);

    });
     
    app.post('/api/notes', (req, res ) => {
    let newNotes = req.body;
    let newData = (data.length).toString()
console.log(newData)
    newNotes.push(newTable)
    res.json(newTable)
    fs.writeFileSync("/db.json", JSON.stringify(data), function(err) {
                if (err) throw (err);        
            }); 
    
            res.json(data);    
    
});