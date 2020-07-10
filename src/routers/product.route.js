const express = require("express");
const isAuthor = require("../core/middleware/isAuth.middleware");
const productController = require("../controller/product.controller");

const productRouter = express.Router();

productRouter.get("/", isAuthor, productController.getAll());
productRouter.get("/:id", isAuthor, productController.getById());
productRouter.post("/", isAuthor, productController.createProduct());
productRouter.put("/:id", isAuthor, productController.updateProduct());
productRouter.delete("/:id", isAuthor, productController.removeProduct());

module.exports = { productRouter };
