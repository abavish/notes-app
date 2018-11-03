const fs = require('fs');
// console.log(os.userInfo().username);
const _ = require('lodash')
const yargs = require('yargs')

const notes = require('./notes')

const argv = yargs.argv
var command = argv._[0]
console.log(`command executed: ${command}`)
console.log('Yargs: ', argv);

if(command == 'add'){
  var note = notes.addNote(argv.title, argv.body)
  if(note === undefined){
    console.log(`Note with the same title already exists.`);
  }
  else{
    console.log(`Note has been created with title: ${argv.title} and body: ${argv.body}`);
  }
}
else if(command == 'list'){
  notes.getAll()
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
    console.log(`Title: ${note[0].title}`);
    console.log(`Body: ${note[0].body}`);
  }
  else{
    console.log('Note with this title does not exist');
  }
}
else{
  console.log('Command not recognized');
}
