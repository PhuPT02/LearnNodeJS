const productRepository = require("../repositories/product.repository");
const { errorsResponse } = require('../core/Constant/errorsResponse.constant');
const { HandleError } = require("../core/helpers/handleError.helper");
const { checkObjectId } = require("../core/helpers/checkObjectId.helper");


exports.getAll = () => {
    return productRepository.getAll();
}

exports.getById = (id) => {
    checkObjectId(id);
    return productRepository.getById(id);
}

exports.createProduct = (product) => {
    return productRepository.createProduct(product);
}

exports.updateProduct = async (id, product) => {
    checkObjectId(id);
    const record = await productRepository.updateProduct(id, product);

    if (!record) {
        const error = errorsResponse.can_not_find_user;
        throw new HandleError(error.key, error.status);
    }

    return record;
}

exports.removeProduct = async (id) => {
    checkObjectId(id);
    const record = await productRepository.removeProduct(id);

    if (!record) {
        const error = errorsResponse.can_not_find_user;
        throw new HandleError(error.key, error.status);
    }

    return record;
}