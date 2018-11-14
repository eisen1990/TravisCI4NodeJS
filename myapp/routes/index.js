var express = require('express');
var router = express.Router();

/* GET home page. */
var getIndex = function(req, res, next) {
  res.render('index', { title: 'Express' });
}
router.get('/', getIndex);

module.exports = {
    getIndex: getIndex
};
