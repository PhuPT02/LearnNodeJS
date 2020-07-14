const { verify } = require("../helpers/jwt.helper");
const { errorsResponse } = require('../Constant/errors_response.constant');


module.exports = async (req, res, next) => {

  const token = req.body.token || req.headers.token;
  const { 
    token_missed, 
    token_invalid, 
    token_unauthorized } = errorsResponse;

  if (!token) {
    const response = { success: false, message: token_missed.key };
    return res.status(token_missed.status).send(response);
  }

  verify(token)
    .then(async (obj) => {
      
      if (!obj) {
        const response = { success: false, message: token_unauthorized.key };
        return res.status(token_unauthorized.status).send(response);
      }

      res.idUser = obj.id;
      next();
    })
    .catch(async () => {
      const response = { success: false, message: token_invalid.key };
      return res.status(token_invalid.status).send(response);
    });
};
