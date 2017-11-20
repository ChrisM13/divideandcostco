var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    res.render('lists/index');
});

// router.post('/')







module.exports = router;
