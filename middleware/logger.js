//@desc Logs request to console

// Middleware authentication that validate a token  - LOGIN MIDDLEWARE
const logger = (req, res, next) => {
  // req.hello = 'Hello World';
  console.log(
    `${req.method} ${req.protocol}://${req.get('host')}${req.originalUrl}`
    );
  next();
  };
  
module.exports = logger;