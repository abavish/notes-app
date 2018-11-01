const fs = require('fs');
const os = require('os');
const notes = require('./notes')
// console.log(os.userInfo().username);
const _ = require('lodash')

// fs.appendFile('greetings.txt', `Hello, ${os.userInfo().username}! You are ${notes.age} years old.`, function (err){
//   if(err){
//     console.log('Unable to write to file');
//   }
// });

console.log(_.uniq(['Vishal', 2,5,3,2,'Vishal']))
