var express = require('express');
var router = express.Router();
let dbconn = require('./database');
let common = require('../lib/common')
var secret = 'hackerthonTest1234';
let jwt = require('jsonwebtoken');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/join', (req, res) => {
  const {name, email, password} = req.body;
  let sql = "SELECT * FROM user WHERE user_email = ?";
  dbconn.pool.query(sql,[email], (err, result) =>{
    if(err){
        console.error(err);
        throw err;
    }
    else {
      if(result.length == 0){
        let userInsert = "INSERT INTO user (user_name, user_email, user_password) VALUES (?,?,?)";
        dbconn.pool.query(userInsert,[name,email,password], (err, result)=>{
          if(err){
              console.error(err);
              throw err;
          }
          else {
            res.json(1);
          }
        })
      }
      else {
        res.json(2)
      }
    }
  })
});


router.post('/login', (req, res) => {
  const {email, password} = req.body;
  let checkUser = "SELECT * FROM user WHERE user_email = ?"
  if(email == ''){
    res.json(common.successMsg(2, '아이디가 없습니다'))
  }
  else {
    dbconn.pool.query(checkUser, [email], (err, result) => {
      if(err){
        console.error(err);
        throw err;
      }
      else {
        if(result.length == 0){
          res.json(common.successMsg(2, '아이디가 없습니다'))
        }
        else {
          if (result[0].user_password == password) {
            jwt.sign(
                {
                  userId: result[0].id,
                  userName : result[0].user_name,
                },
                secret,
                {
                  expiresIn: '1d',
                  issuer: 'hackerthon',
                  subject: 'userInfo'
                },
                function (err, token) {
                  res.json(common.successMsg(1, token));
                }
            );
          }
          else {
            res.json(common.successMsg(2, '패스워드를 확인하세요'))
          }
        }
      }
    })
  }
});




module.exports = router;
