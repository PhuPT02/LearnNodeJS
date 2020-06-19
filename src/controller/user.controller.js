const userService = require("../services/user.service");

exports.getAll = (req, res, next) => {
  userService
    .getAll()
    .then((user) => res.send({ success: true, user }))
    .catch(res.onError);
};

exports.createUser = (req, res, next) => {
  userService.createUser(req.body)
  .then(user => res.send({ success: true, user }))
  .catch(res.onError)
};

exports.login = (req,res,next) =>{
    const { email, password } = req.body;
    userService.login(email, password)
    .then(user => res.send({ success: true, user }))
    .catch(res.onError);
}
