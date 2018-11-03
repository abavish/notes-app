const fs = require('fs');
// console.log(os.userInfo().username);
const _ = require('lodash')
const yargs = require('yargs')

const notes = require('./notes')

const titleOptions = {
  describe: 'Title of the note',
  demand: true,
  alias: 't'
}
const bodyOptions = {
  describe: 'Body of the note',
  demand: true,
  alias: 'b'
}
//command name, command description, command options object
const argv = yargs
  .command('add', 'Add a new note', {
    title: titleOptions,
    body: bodyOptions
  })
  .command('list', 'List all nodes')
  .command('read', 'Read a note', {
    title: titleOptions
  })
  .command('remove', 'Removes a note',{
    title: titleOptions
  })
  .help()
  .argv
var command = argv._[0]

if(command == 'add'){
  var note = notes.addNote(argv.title, argv.body)
  if(note === undefined){
    console.log(`Note with the same title already exists.`);
  }
  else{
    console.log(('Note created'));
    notes.logNote(note)
  }
}
else if(command == 'list'){
  var allNotes = notes.getAll()
  console.log(`Printing ${allNotes.length} note(s).`);
  allNotes.forEach((note) => notes.logNote(note))
}
else if(command == 'remove'){
  var noteRemoved = notes.removeNote(argv.title)
  var message = noteRemoved ? 'Note removed successfully' : 'Note does not exist'
  console.log(message);


}
else if(command == 'read'){
  var note = notes.getNote(argv.title)
  // console.log(note.length);
  if(note){
    console.log('Note Found!');
    notes.logNote(note)
  }
  else{
    console.log('Note with this title does not exist');
  }
}
else{
  console.log('Command not recognized');
}
