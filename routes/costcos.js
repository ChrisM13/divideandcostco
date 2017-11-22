var express = require('express');
var router = express.Router();
// var yelpCtrl = require('./../util/yelp');
var costcosCtrl = require('./../controllers/costcosController');

router.get('/:zip', costcosCtrl.show);
router.get('/:zip/connection', costcosCtrl.connection);
router.post('/', costcosCtrl.index);
    
module.exports = router;    
