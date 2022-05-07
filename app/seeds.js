const dbConfig = require('../config/database.config.js');
const mongoose = require('mongoose');
const Acronym = require('./models/acronym.model.js');

mongoose.connect(dbConfig.url, {
  useNewUrlParser: true
}).then(() => {
  console.log("Successful database connection")
}).catch(err => {
  console.log('Failed database connection. Exiting.')
  process.exit();
});

const seedAcronyms = [
  {
    acronym: "AATK",
    definition: "Always at the keyboard"
  },
  {
    acronym: "AAYF",
    definition: "As always your friend"
  },
  {
    acronym: "ABC",
    definition: "Already been chewed"
  },
  {
    acronym: "ABD",
    definition: "Already been done"
  },
  {
    acronym: "ABU",
    definition: "All bugged up"
  },
  {
    acronym: "AC",
    definition: "Acceptable content"
  },
  {
    acronym: "ACC",
    definition: "Anyone can come"
  },
  {
    acronym: "ADBB",
    definition: "All done bye bye"
  },
  {
    acronym: "ADAD",
    definition: "Another day another dollar"
  },
  {
    acronym: "BOB",
    definition: "Back off buddy"
  },
  {
    acronym: "BOL",
    definition: "Best of luck"
  },
  {
    acronym: "BOLO",
    definition: "Be on the look out"
  },
  {
    acronym: "BOOMS",
    definition: "Bored out of my skull"
  },
  {
    acronym: "DDG",
    definition: "Drop dead gorgeous"
  },
  {
    acronym: "DGA",
    definition: "Don't go anywhere"
  },
  {
    acronym: "GMV",
    definition: "Got my vote"
  },
  {
    acronym: "GN",
    definition: "Good night"
  },
  {
    acronym: "GNA",
    definition: "Good night all"
  },
  {
    acronym: "GNE1",
    definition: "Good night everyone"
  },
  {
    acronym: "GOAT",
    definition: "Greatest of all time"
  },
  {
    acronym: "GOMB",
    definition: "Get off my back"
  },
  {
    acronym: "QOTD",
    definition: "Quote of the day"
  },
  {
    acronym: "RSS",
    definition: "Rich site summary"
  },
  {
    acronym: "RT",
    definition: "Real time"
  },
  {
    acronym: "RT",
    definition: "Roger that"
  },
  {
    acronym: "RTMS",
    definition: "Read the manual silly"
  },
]

const seedDB = async () => {
  await Acronym.deleteMany({});
  await Acronym.insertMany(seedAcronyms);
};

seedDB().then(() => {
  console.log('Seed Successful');
  mongoose.connection.close();
})