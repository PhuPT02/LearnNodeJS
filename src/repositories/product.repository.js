const { Product } = require("../models/product.model");

exports.createProduct = (product) => {
  const newProduct = new Product(product);
  return newProduct.save();
};

exports.updateProduct = (id, product) => {
  return Product.findByIdAndUpdate(id, product, { new: true });
};

exports.removeProduct = (id) => {
  return Product.findByIdAndDelete(id);
};

exports.getAll = () => {
  return Product.find({});
};

exports.getById = (id) => {
  return Product.findById(id);
};
