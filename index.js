const express = require("express");

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());


app.listen(3000, () => {
  console.log("API Server running on port 3000!");
})

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