var express = require('express');
var router = express.Router();
var Product = require('../models/product');
var listCtrl = require('../controllers/listController');
var log = require('../util/auth');

router.get('/new/:zip', log.isLoggedIn, listCtrl.show);

router.post('/:zip', log.isLoggedIn, listCtrl.createList);

router.put('/', log.isLoggedIn, listCtrl.update);

router.put('/:userListId/connect/:listId', log.isLoggedIn, listCtrl.connect);

router.delete('/:listId/products/:productId', log.isLoggedIn, listCtrl.destroy);

module.exports = router;
