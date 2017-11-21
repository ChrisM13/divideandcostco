var express = require('express');
var router = express.Router();
// var yelpCtrl = require('./../controllers/api/yelpController');
var costcosCtrl = require('./../controllers/costcosController');


router.get('/', costcosCtrl.index); 

router.get('/:zip', costcosCtrl.show);
    
module.exports = router;    
