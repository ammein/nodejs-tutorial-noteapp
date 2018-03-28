console.log("Starting app.js");
// Lodash
const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');
const notes = require('./notes.js');

const argv = yargs.argv;
var command = argv._[0]; // Select object of underscore(_) and select index 0 for that array
// Now test it
// console.log("Command :" , command);
// console.log("Process" , process.argv);
// console.log("Yargs" , argv);

if (command === 'add') {
    // body represents as value of attribute
    notes.addNote(argv.title , argv.body);
}else if (command === 'list'){
    notes.getAll();
}else if (command === 'read'){
    notes.getNote(argv.title);
}else if (command === 'remove') {
    notes.removeNote(argv.title)
}else{
    console.log("Command Not Recognized");
}