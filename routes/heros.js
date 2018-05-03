var express = require('express');
var router = express.Router();
var request = require('request');

router.get('/', function(req, res, next) {
  request('http://lol.qq.com/biz/hero/champion.js', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      body=body.replace("if(!LOLherojs)var LOLherojs={};LOLherojs.champion=","");
      body=body.replace(";","")
      res.send(body);
    }
  })
});

module.exports = router;