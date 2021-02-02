const fs = require("fs");
let {notes,highest} = JSON.parse(fs.readFileSync("./db.json", "utf8"));


module.exports = function(app) {

    app.get("/api/notes", function(req, res) {
        
        res.json(notes);

    });

    app.get("/api/notes/:id", function(req, res) {

        res.json(notes[Number(req.params.id)]);

    });
     
    app.post('/api/notes', (req, res ) => {
    let newNotes = req.body;
    //let newData = (notes.length).toString()
    let notesID = highest = highest + 1
    newNotes.id = notesID
    console.log(newNotes)
    notes.push(newNotes)
    // res.json(newNotes)
    fs.writeFile("./db.json", JSON.stringify({highest,notes}), function(err) {
                if (err) throw (err);        
            }); 
    
            res.json(notes);    
    })
    
    app.delete("/api/notes/:id", function(req, res) {
        console.log(req.params)
        // res.json(data[Number(req.params.id)]);
        //put route 
        //put /patch diff
    });
};