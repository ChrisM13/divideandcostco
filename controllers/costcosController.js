var yelpCtrl = require('./api/yelpController');

function index(req, res) {
    res.render('index', {costcoData})
}

module.exports = {
    index
};