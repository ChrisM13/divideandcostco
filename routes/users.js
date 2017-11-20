var express = require('express');
var router = express.Router();
var userCtrl = require('./../controllers/usersController');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('users/index');
});

router.get('/:id', userCtrl.show);

router.get('/:id/lists', userCtrl.getUserLists)



module.exports = router;
