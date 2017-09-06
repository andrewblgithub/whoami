var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var data = {"ipaddress":"173.220.229.173","language":"en-US","software":"Windows NT 6.1; Win64; x64"};
  res.json(data);
});

module.exports = router;
