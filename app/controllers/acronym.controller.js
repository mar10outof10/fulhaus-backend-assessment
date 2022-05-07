const Acronym = require('../models/acronym.model.js');

exports.get = (req, res) => {

  page = req.query.page || 1;
  limit = req.query.limit || 10;
  search = req.query.search || null;


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

}

