const { verify } = require("../helpers/login/jwt.helper");

module.exports = (req, res, next) => {
  const token = req.body.token || req.headers.token;
  if (!token)
    return res.status(400).send({ success: false, message: "Missing token" });

  verify(token)
    .then((obj) => {
      if (!obj)
        return res.status(400).send({ success: false, message: "Unauthorized" });
      res.idUser = obj.id;
      next();
    })
    .catch(() => {
      return res.status(400).send({ success: false, message: "Invalid token" });
    });
};
