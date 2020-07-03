const { verify } = require("../helpers/login/jwt.helper");
const messageService = require('../../services/message.service');

module.exports = (req, res, next) => {

  const token = req.body.token || req.headers.token;

  if (!token) {
    const getMessage = messageService.getByKey('miss_token');
    console.log(getMessage)
    console.log(1)
    return res.status(getMessage.status).send({ success: false, message: getMessage.message });
  }

  verify(token)
    .then((obj) => {
      if (!obj) {
        const getMessage = messageService.getByKey('unauthorized');
        console.log(getMessage)
        console.log(2)
        return res.status(getMessage.status).send({ success: false, message: getMessage.message });
      }

      res.idUser = obj.id;
      next();
    })
    .catch(() => {
      const getMessage = messageService.getByKey('token_invalid');
      console.log(getMessage)
      console.log(2)
      //return res.status(getMessage.status).send({ success: false, message: getMessage.message });
    });
};
