const Aconym = require('../models/acronym.model.js');

exports.get = (req, res) => {
  page = req.query.page;
  limit = req.query.limit;
  search = req.query.search;
  
}

exports.post = (req, res) => {

}

exports.patch = (req, res) => {
  const acronymID = req.params.acronymID;

}

exports.delete = (req, res) => {
  const acronymID = req.params.acronymID;

}

