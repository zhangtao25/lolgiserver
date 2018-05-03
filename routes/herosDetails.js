var express = require('express');
var router = express.Router();
var request = require('request');

router.get('/', function(req, res, next) {
  console.log(req.query);

  let url = 'http://lol.qq.com/biz/hero/'+req.query.id+'.js';
  request(url, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      body=body.replace("if(!LOLherojs)var LOLherojs={champion:{}};LOLherojs.champion."+req.query.id+"=","");
      body=body.replace(";","")
      // console.log(body);
      res.send(body);
    }
  })
});

module.exports = router;