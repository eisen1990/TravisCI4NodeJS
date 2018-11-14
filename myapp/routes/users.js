var express = require('express');
var router = express.Router();

/* GET users listing. */
var getUsers = function(req, res, next) {
  res.send('respond with a resource');
}
router.get('/', getUsers);

module.exports = {
    getUsers: getUsers
}
