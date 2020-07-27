const productRepository = require("../repositories/product.repository");
const { errorsResponse } = require("../core/Constant/errors_response.constant");
const { HandleError } = require("../core/helpers/handle_error.helper");
const { checkObjectId } = require("../core/helpers/check_object_Id.helper");

exports.getAll = () => {
  return productRepository.getAll();
};

exports.getById = (id) => {
  return productRepository.getById();
};

exports.createProduct = (product) => {
  return productRepository.createProduct(product);
};

exports.updateProduct = async (id, product) => {
  checkObjectId(id);
  const record = await productRepository.updateProduct(id, product);

  if (!record) {
    const error = errorsResponse.can_not_find_user;
    throw new HandleError(error.key, error.status);
  }

  return record;
};

exports.removeProduct = async (id) => {
  checkObjectId(id);
  const record = await productRepository.removeProduct(id);

  if (!record) {
    const error = errorsResponse.can_not_find_user;
    throw new HandleError(error.key, error.status);
  }

  return record;
};
