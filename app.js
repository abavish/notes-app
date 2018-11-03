const fs = require('fs');
// console.log(os.userInfo().username);
const _ = require('lodash')

const notes = require('./notes')

var command = process.argv[2]
console.log(`command executed: ${command}`)

if(command == 'add'){
  console.log('Adding new node.');
}
else if(command == 'list'){
  console.log(`Listing to all nodes.`);
}
else if(command == 'remove'){
  console.log(`Deleting a node`);
}
else if(command == 'read'){
  console.log(`Fetching a node.`);
}
else{
  console.log('Command not recognized');
}
