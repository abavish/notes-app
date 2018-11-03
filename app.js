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
  notes.addNote(argv.title, argv.body)
}
else if(command == 'list'){
  notes.getAll()
}
else if(command == 'remove'){
  notes.removeNote(argv.title)
}
else if(command == 'read'){
  notes.getNote(argv.title)
}
else{
  console.log('Command not recognized');
}
