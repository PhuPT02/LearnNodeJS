const { MyError } = require('../helpers/handleError/myError');
const { startPage, endPage } = require('../helpers/pagination.config');
const { Role } = require('../models/role.model');

exports.getAll = (numberPage = 1, condition = '') => {
    const start = startPage(numberPage);
    const objCondition = condition ? { name: condition } : {};

    return Role.find(objCondition).skip(start).skip(endPage);
}