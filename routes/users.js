var express = require('express');
var router = express.Router();
var userCtrl = require('./../controllers/usersController');
var log = require('./../util/auth');

/* GET users listing. */
router.get('/', (req, res, next) => {
  res.render('users/index', log.isLoggedIn);
});

module.exports = router;
