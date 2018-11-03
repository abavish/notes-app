console.log("Starting notes.js");

var addNote = (title, body) => {
  console.log('Adding note', title, body)
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
