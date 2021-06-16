const fs = require("fs");
const chalk = require("chalk");
// export function and variable to other file
// const firstName = "Mike";

// const add = function (a, b) {
//   return a + b;
// };

const getNotes = () => {
  return "youre Notes !";
};

const addNote = (title, body) => {
  const notes = loadNotes();
  //const duplicateNotes = notes.filter((note) => note.title === title);

  const duplicateNote = notes.find((note) => note.title === title);
  //console.log(duplicateNote);
  //debugger;
  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body,
    });
    saveNotes(notes);
    console.log(chalk.green.inverse("New note added!"));
  } else {
    console.log(chalk.red.inverse("Note title taken!"));
  }
  // const duplicateNotes = notes.filter(function (note) {
  //   return note.title === title;
  // });

  // if (duplicateNotes.length === 0) {
  //   notes.push({
  //     title: title,
  //     body: body,
  //   });
  //   saveNotes(notes);
  //   console.log("New note added!");
  // } else {
  //   console.log("Note title taken!");
  // }
};

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const loadNotes = function () {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

const removeNote = function (title) {
  const notes = loadNotes();
  const notesKeep = notes.filter(function (note) {
    return note.title != title;
  });
  if (notes.length > notesKeep.length) {
    console.log(chalk.green("Note Removed"));
    saveNotes(notesKeep);
  } else {
    console.log(chalk.red("No Note Found"));
  }
};

const listNotes = () => {
  const notes = loadNotes();
  console.log(chalk.inverse("Youre Notes"));
  notes.forEach((note) => {
    console.log(note.title);
  });
};

const readNotes = (title) => {
  const notes = loadNotes();
  const note = notes.find((note) => note.title === title);
  if (note) {
    console.log(chalk.inverse(note.title));
    console.log(note.body);
  } else {
    console.log(chalk.red.inverse("Note not found"));
  }
};

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNotes: readNotes,
};
