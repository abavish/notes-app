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
  var notes = fetchNotes()

  var filteredNotes = notes.filter((note) => note.title !== title)
  saveNotes(filteredNotes)
  return filteredNotes.length !== notes.length
}

var getNote = (title) => {
  var notes = fetchNotes()
  var filteredNote = notes.filter((note) => note.title === title)
  return filteredNote
}
module.exports = {
  addNote,
  getAll,
  removeNote,
  getNote,
}
