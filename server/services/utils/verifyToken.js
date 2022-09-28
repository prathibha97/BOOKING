const jwt = require("jsonwebtoken");
const createError = require("./error");

function verifyToken(req, res, next) {
  const token = req.cookies.access_token;
  if (!token) {
    return res.status(401).json("You are not authenticated!");
  }

  jwt.verify(token, process.env.JWTSECRET, (err, user) => {
    if (err) return res.status(403).json("Token is not valid!");
    req.user = user;
    next();
  });
}

function verifyUser(req, res, next) {
  verifyToken(req, res, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      return next(createError(403, "You are not authorized!"));
    }
  });
}

function verifyAdmin(req, res, next) {
  verifyToken(req, res, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      return next(createError(403, "You are not authorized!"));
    }
  });
}

module.exports = { verifyToken, verifyUser, verifyAdmin };
