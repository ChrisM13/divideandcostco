var express = require('express');
var router = express.Router();
var log = require('./../util/auth');
var costcosCtrl = require('./../controllers/costcosController');

<<<<<<< HEAD
router.get('/:zip', costcosCtrl.show);

router.post('/', costcosCtrl.index);

=======
router.get('/:zip', log.isLoggedIn, costcosCtrl.show);
router.get('/:zip/connection', log.isLoggedIn, costcosCtrl.connection);
router.post('/', log.isLoggedIn, costcosCtrl.index);
    
>>>>>>> master
module.exports = router;    
