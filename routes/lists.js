var express = require('express');
var router = express.Router();
var Product = require('../models/product');
var listCtrl = require('../controllers/listController');
var loggedIn = require('../util/auth');

router.get('/new/:zip', listCtrl.show);

router.post('/:zip', loggedIn, listCtrl.createList);

router.put('/', listCtrl.update);

router.put('/:userListId/connect/:listId', listCtrl.connect);

router.delete('/:listId/products/:productId', listCtrl.destroy);


module.exports = router;
