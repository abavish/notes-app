const fs = require('fs');
const os = require('os');
const notes = require('./notes')
// console.log(os.userInfo().username);

fs.appendFile('greetings.txt', `Hello, ${os.userInfo().username}! You are ${notes.age} years old.`, function (err){
  if(err){
    console.log('Unable to write to file');
  }
});
