require('dotenv');
var jwt = require('jwt-simple');

module.exports = function (req, res, next) {
  if (req.headers['x-auth']) {
    req.auth = jwt.decode(req.headers['x-auth'], process.env.JWT_SECRET);
  next();
  }else{
    res.status(500).json({
    message: "erreur d'authentification"
    });
  }
  
}
