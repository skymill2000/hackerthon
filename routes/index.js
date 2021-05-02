var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/ping', function(req, res, next) {
  res.json(1);
});

router.get('/userpolicy', function(req, res, next) {
  res.send('사용자는 아래와 같은 ~');
});

router.get('/servicepolicy', function(req, res, next) {
  res.send('서비스는 아래와 같은');
});

module.exports = router;
