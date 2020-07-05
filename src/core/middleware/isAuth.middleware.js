const { verify } = require("../helpers/login/jwt.helper");
const messageService = require('../../services/message.service');

module.exports = async (req, res, next) => {

  const token = req.body.token || req.headers.token;

  if (!token) {
    const getMessage = await messageService.getByKey('miss_token');
    const response = { success: false, message: getMessage.message };
    return res.status(getMessage.status).send(response);
  }

  verify(token)
    .then(async (obj) => {
      if (!obj) {
        const getMessage = await messageService.getByKey('unauthorized');
        const response = { success: false, message: getMessage.message };
        return res.status(getMessage.status).send(response);
      }

      res.idUser = obj.id;
      next();
    })
    .catch(async () => {
      const getMessage = await messageService.getByKey('token_invalid');
      const response = { success: false, message: getMessage.message };
      return res.status(getMessage.status).send(response);
    });
};
