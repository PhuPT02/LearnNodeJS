const productService = require('../services/product.service');
const { createProductSchema } = require('../validations/product/create_product.validation');

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

exports.getAll = (req,res )=> {
    productService.getAll()
    .then(products=> res.send({success: true, products}))
    .catch(res.onError)
}

exports.getById = (req,res)=>{
    productService.getById()
    .then(product => res.send({success: true, product}))
    .catch(res.onError)
}