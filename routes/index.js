var express = require('express');
var router = express.Router();
var passport = require('passport');
var yelpCtrl = require('./../controllers/api/yelpController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { user: req.user, costcoData: null });
});

/* Routes for OAuth */
router.get('/auth/google', passport.authenticate(
  'google', { scope: ['profile', 'email'] }
));
router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect: '/',
    failureRedirect: '/'
  }
));
router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

/* Routes for Yelp API */
router.post('/costcos', yelpCtrl.findCostco);

module.exports = router;
