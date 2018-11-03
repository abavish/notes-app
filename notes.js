console.log("Starting notes.js");
const fs = require('fs')

var fetchNotes = () => {
  try {
    var notesString = fs.readFileSync('notes-data.json')
    return JSON.parse(notesString)
  } catch(e){
    return []
  }
}

var saveNotes = (notes) => {
 fs.writeFileSync('notes-data.json', JSON.stringify(notes))
}

var addNote = (title, body) => {
  var notes = fetchNotes()
  var note = {
    title,
    body
  }
//store array of notes existing in array which have title as the one being inserted
  var duplicateNotes = notes.filter((note) => note.title === title)

  if(duplicateNotes.length === 0){
    notes.push(note)
    saveNotes(notes)
    return note
  }

}

var getAll = () => {
  console.log('Getting all notes')
}

var removeNote = (title) => {
  console.log('Removing the note with title: ', title);
}

var getNote = (title) => {
  console.log('Getting the note with title: ', title);
}
module.exports = {
  addNote,
  getAll,
  removeNote,
  getNote,
}
