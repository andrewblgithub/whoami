var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var ip = req.headers['x-forwarded-for'] || 
     req.connection.remoteAddress || 
     req.socket.remoteAddress ||
     req.connection.socket.remoteAddress;
  ip = ip.replace(/^.*:/, '');
  var lang = req.headers["accept-language"];
  lang = lang.substring(0, lang.indexOf(','));
  var soft = req.headers["user-agent"];
  soft = soft.substring(soft.indexOf('(') + 1, soft.indexOf(')'));
  //{"ipaddress":"173.220.229.173","language":"en-US","software":"Windows NT 6.1; Win64; x64"};
  var data = {"ipaddress":ip,"language":lang,"software":soft};
  res.json(data);
});

module.exports = router;
