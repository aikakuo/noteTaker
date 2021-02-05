// const { json } = require("body-parser");
const fs = require("fs");
let {notes,highest} = JSON.parse(fs.readFileSync("./db.json", "utf8"));

const path = require('path')
const util = require('util')

module.exports = function(app) {

    app.get("/api/notes", function(req, res) {
     
        res.json(notes);

    });

    app.get("/api/notes/:id", function(req, res) {

        res.json(notes[Number(req.params.id)]);

    });
     
    app.post('/api/notes', (req, res ) => {
    let newNotes = req.body;
    let notesID = highest = highest + 1
    newNotes.id = notesID
    console.log(newNotes)
    notes.push(newNotes)
    fs.writeFile("./db.json", JSON.stringify({highest,notes}), function(err) {
                if (err) throw (err);        
            }); 
    
            res.json(notes);    
    })
    
    app.delete("/api/notes/:id", function(req, res) {
       
        let newNotesId = req.params.id

        const index = notes.findIndex(note => {
            console.log(typeof note.id)
            console.log(typeof newNotesId)
            return (note.id == newNotesId)
            
            }) 
            console.log(index)
            console.log(notes)
            notes.splice(index, 1)
            console.log(notes)
            
            
        fs.writeFile("./db.json", JSON.stringify({highest,notes}), function(err) {
            if (err) throw (err);        
        }); 
    });
}
            
  
