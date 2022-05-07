const express = require("express");

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect(dbConfig.url, {
  useNewUrlParser: true
}).then(() => {
  console.log("Successful database connection")
}).catch(err => {
  console.log('Failed database connection. Exiting.')
  process.exit();
});

//Require routes
require('./app/routes/acronym.routes.js')(app);

app.listen(3000, () => {
  console.log("API Server running on port 3000!");
})