const { verify } = require("../helpers/login/jwt.helper");

module.exports = (req, res, next) => {
  const token = req?.body?.token || req?.headers?.token;
  console.log(token);
  if (!token)
    res.status(400).send({ success: false, message: "Missing token" });

  verify(token)
    .then((obj) => {
      if (!obj)
        res.status(400).send({ success: false, message: "Unauthorized" });
      next();
    })
    .catch(() => {
      res.status(400).send({ success: false, message: "Invalid token" });
    });
};
