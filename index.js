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

app.get("/acronym", (req, res) => {
  page = req.query.page;
  limit = req.query.limit;
  search = req.query.search;
})

app.post("/acronym", (req, res) => {
  
})

app.patch("/acronym/:acronymID", (req, res) => {
  const acronymID = req.params.acronymID;
})

app.delete("/acronym/:acronymID", (req, res) => {
  const acronymID = req.params.acronymID;
})

app.listen(3000, () => {
  console.log("API Server running on port 3000!");
})