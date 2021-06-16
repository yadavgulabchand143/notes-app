const fs = require("fs");
const getNotes = require("./notes");
const validator = require("validator");
const chalk = require("chalk");
const yargs = require("yargs");
const notes = require("./notes");
// fs.writeFileSync("notes.txt", "My Name is Gulab!");
// fs.appendFileSync("notes.txt", "My Name is Sanjay!");
//fs.writeFileSync("notes.txt", getNotes());
//console.log(add(2, 3));

//console.log(validator.isEmail("abc@test.com"));
//console.log(validator.isURL("https://mead.io"));
//console.log(chalk.red.inverse.bold("Error!"));
//console.log(getNotes());

// Command Line Argument
//console.log(process.argv);
// const command = process.argv[2];
// if (command === "add") {
//   console.log("Adding Notes !");
// } else if (command === "remove") {
//   console.log("Removing Note!");
// }
//console.log(yargs.argv);

//Customized yargs version
//yargs.version("1.1.0");

// add , remove ,read, list
// create add command

yargs.command({
  command: "add",
  describe: "add a new note",
  builder: {
    title: {
      describe: "note title",
      demandOption: true,
      type: "String",
    },
    body: {
      describe: "note body",
      demandOption: true,
      type: "String",
    },
  },
  handler(argv) {
    //console.log("Title : " + argv.title);
    //console.log("Body : " + argv.body);
    notes.addNote(argv.title, argv.body);
  },
});

// // create remove command

yargs.command({
  command: "remove",
  describe: "remove a note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "String",
    },
  },
  handler(argv) {
    //console.log("Removing the note!");
    notes.removeNote(argv.title);
  },
});

// create list command

yargs.command({
  command: "list",
  describe: "list your note",
  handler: function () {
    notes.listNotes();
  },
});

// // create read command

yargs.command({
  command: "read",
  describe: "read a note",
  builder: {
    title: {
      describe: "Read a Note",
      demandOption: true,
      type: "String",
    },
  },
  handler: function (argv) {
    notes.readNotes(argv.title);
  },
});

yargs.parse();
// //console.log(yargs.argv);

// Asynchronus call in node

// console.log("starting");

// setTimeout(() => {
//   console.log("2 Second Timer");
// }, 2000);

// setTimeout(() => {
//   console.log("0 Second Timer");
// }, 0);

// console.log("stoping");
