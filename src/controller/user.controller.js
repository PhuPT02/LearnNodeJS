const userService = require('../services/user.service');

exports.getAll = (req, res, next) => {
    userService.getAll()
    .then(user => res.send({ success: true, user }))
    .catch(res.onError)
}