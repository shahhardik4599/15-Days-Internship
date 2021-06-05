var express = require('express');
var mysql      = require('mysql');
var router = express.Router();

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'hardik_cafe'
});
connection.connect(function(err){
  if(!err){
    console.log("DB connected");
  }
  else{
    console.log("DB connection issue !");
  }
});
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

// router.post('/feedback', function(req, res, next) {
//   var r1 = parseInt(req.body.num1);
//   var r2 = parseInt(req.body.num2);
//   var name = req.body.name;
//   var total = r1+r2;
//   var mob = parseInt(req.body.num);
//   var suggest = req.body.suggest;

//   console.log(req.body);
//   res.render('feedback',{rt1:r1,rt2:r2,name:name,total:total,mob:mob,suggest,suggest});
// });

router.post('/add-process', function(req, res, next) {
  console.log(req.body);
  const mybodydata={
    Name : req.body.name,
    Mob : req.body.num,
    rt1 : req.body.num1,
    rt2: req.body.num2,
    suggest: req.body.suggest
  }
  connection.query("insert into user_feedback set ?",mybodydata,function(err,result){
    if(err) throw err;
    res.redirect('form');
  });
});

  router.get('/feedback', function(req, res, next) {
    connection.query("select * from user_feedback",function(err,db_rows){
      if(err) throw err;
      console.log(db_rows);
      res.render('feedback',{db_rows : db_rows});
    });
});

module.exports = router;
