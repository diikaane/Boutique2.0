var router = require('express').Router()
var bcrypt = require('bcrypt')
var jwt    = require('jwt-simple')
var User   = require('../../model/UserShemas')

router.post('/', function (req, res, next) {
  var check = false; 
  var username = req.body.username;
  var password =req.body.password;
  
  /**
   * 
   * SQL ICI BRO
   * 
   * 
   */
    if (!user) { 
      check = false;  
    }else{
      bcrypt.compare(password, user.password, function (err, valid) {
        if (err) { 
          return next(err) 
        }
        if (!valid) { 
          return res.sendStatus(401).json({
            message: "password invalide"
          }) 
        }else{
        var token = jwt.encode({username: username}, config.jwt_secret)
          res.status(200).json({
          token: token
          }); 
        }
      }) 
    }
    
  });

module.exports = router;
