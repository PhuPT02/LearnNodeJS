const Joi = require("@hapi/joi");
const { errorsResponse } = require('../../core/Constant/errors_response.constant');

const createProductSchema = Joi.object().keys({
    name: Joi.string().required().max(300).messages({
        "string.base": errorsResponse.product_name_must_be_string.key,
        "string.required": errorsResponse.product_name_must_be_required.key,
        "string.empty": errorsResponse.product_name_must_be_required.key
    }),
    Price: Joi.number().required().min(0).empty().messages({
        "number.base": errorsResponse.product_price_must_be_number_type.key,
        "number.min": errorsResponse.product_price_more_than_0.key,
        "number.required": errorsResponse.product_price_must_be_required.key,
        "number.empty": errorsResponse.product_price_must_be_required.key
    }),
    PromotionPrice: Joi.number().min(0).messages({
        "number.base": errorsResponse.product_promotionPrice_must_be_number_type.key,
        "number.min": errorsResponse.product_promotion_price_more_than_0.key
    }),
    Description: Joi.string().messages({
        "string.base": errorsResponse.product_description_must_be_string.key
    }),
    HomeFlag: Joi.boolean().messages({
        "boolean.base": errorsResponse.product_home_flag_must_be_boolean.key
    }),
    HotFlag: Joi.boolean().messages({
        "boolean.base": errorsResponse.product_hot_flag_must_be_boolean.key
    }),
    Quantity: Joi.number().min(0).message({
        "number.base": errorsResponse.product_quantity_must_be_number_type.key,
        "number.min": errorsResponse.product_quantity_more_than_0.key
    })
});

module.exports = { createProductSchema };