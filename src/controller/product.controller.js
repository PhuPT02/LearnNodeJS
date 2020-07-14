const productService = require('../services/product.service');

exports.getAll = (req, res) => {
    productService.getAll()
        .then(product => res.send({ success: true, product }))
    // .catch(res.onError);
};

exports.getById = (req, res) => {

    const { id } = req.params;

    productService.getById(id)
        .then(product => res.send({ success: true, product }))
        .catch(res.onError)
};

exports.createProduct = (req, res) => {
    const value = {};
    productService.createProduct(value)
        .then(product => res.send({ success: true, product }))
        .catch(res.onError)
};

exports.updateProduct = (req, res) => {

    const { id } = req.params;
    const value = {};

    productService.updateProduct(id, value)
        .then(product => res.send({ success: true, product }))
        .catch(res.onError)

};

exports.removeProduct = (req, res) => {

    const { id } = req.params;

    productService.removeProduct(id)
        .then(product => res.send({ success: true, product }))
        .catch(res.onError)
};