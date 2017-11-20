var express = require('express');
var router = express.Router();

// localhost/lists
router.get('/', function(req, res) {
    res.render('lists/index');
});

// localhost/users/:id/lists


// router.post('/')







module.exports = router;
