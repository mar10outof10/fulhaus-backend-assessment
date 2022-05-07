const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');
const Acronym = require('./models/acronym');

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
    acronym: "",
    definition: ""
  },
]

const seedDB = async () => {
  await Acronym.deleteMany({});
  await Acronym.insertMany(seedAcronyms);
};

seedDB().then(() => {
  mongoose.connection.close();
})