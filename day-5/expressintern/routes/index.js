var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.get('/', function(req, res, next) {
  res.render('master', { title: 'Express' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'Express' });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Express' });
});

router.get('/form', function(req, res, next) {
  res.render('form', { title: 'Express' });
});

router.post('/form-process', function(req, res, next) {
  var r1 = parseInt(req.body.num1);
  var r2 = parseInt(req.body.num2);
  var name = req.body.name;
  var total = r1+r2;
  console.log(req.body);
  res.render('feedback',{rt1:r1,rt2:r2,name:name,total:total});
});



module.exports = router;
