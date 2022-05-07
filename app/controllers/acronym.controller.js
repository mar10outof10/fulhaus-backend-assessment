const Acronym = require('../models/acronym.model.js');

const escapeRegex = (text) => text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");

exports.get = (req, res) => {
  const page = req.query.page || 1;
  const limit = req.query.limit || 10;
  const skip = (page - 1) * limit;
  const search = req.query.search ? (
    new RegExp(escapeRegex(req.query.search), 'gi')
  ) : (
    '*'
  );

  console.log(page, limit, skip, search);

  Acronym.find({$or: [
    {acronym: search},
    {definition: search}
  ]}).skip(skip).limit(limit).exec()
  .then(acronyms => {
    console.log(acronyms);
    res.send(acronyms)
  }).catch(err =>{
    console.log(err);
  })
}

exports.post = (req, res) => {
  if(!req.body.acronym || !req.body.definition) {
      return res.status(400).send({
          message: "Acronym and Definition must be entered"
      });
  }

  const acronym = new Acronym({
    acronym: req.body.acronym,
    definition: req.body.definition
  });

  acronym.save()
  .then(data => {
    res.send(data);
  }).catch(err => {
    res.status(500).send({
      message: err.message || "Error occured while creating acronym"
    })
  })
}

exports.patch = (req, res) => {
  const acronymID = req.params.acronymID;
  if (!req.body.acronym || !req.body.definition) {
    return res.status(400).send({
      message: "Acronym and Definition must be entered",
    });
  }

  Acronym.findByIdAndUpdate(acronymID, {
      acronym: req.body.acronym,
      definition: req.body.definition
  }, {new: true})
  .then(acronym => {
      if(!acronym) {
          return res.status(404).send({
              message: `No acronym with ${acronymID} found`
          });
      }
      res.send(acronym);
  }).catch(err => {
      if(err.kind === 'ObjectId') {
          return res.status(404).send({
              message: `No acronym with ${acronymID} found`
          });                
      }
      return res.status(500).send({
          message: `Error updating acronym at ${acronymID}`
      });
  });
}

exports.delete = (req, res) => {
  const acronymID = req.params.acronymID;

  Acronym.findByIdAndRemove(acronymID)
  .then(acronym => {
      if(!acronym) {
          return res.status(404).send({
              message: `No acronym with ${acronymID} found`
          });
      }
      res.send({message: "Acronym deleted!"});
  }).catch(err => {
      if(err.kind === 'ObjectId' || err.name === 'NotFound') {
          return res.status(404).send({
              message: `No acronym with ${acronymID} found`
          });                
      }
      return res.status(500).send({
          message: `Error deleting acronym at ${acronymID}`
      });
  });
}

