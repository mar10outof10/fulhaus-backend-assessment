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

}

exports.delete = (req, res) => {
  const acronymID = req.params.acronymID;

}

