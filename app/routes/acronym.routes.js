module.exports = (app) => {
  const acronym = require('../controllers/acronym.controller.js');

  app.get("/acronym", acronym.get)
  
  app.post("/acronym", acronym.post)
  
  app.patch("/acronym/:acronymID", acronym.patch)
  
  app.delete("/acronym/:acronymID", acronym.delete)
}