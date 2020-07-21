const Joi = require("@hapi/joi");

const createProductSchema = Joi.object().keys({
    name : Joi.string().required().max(300).messages({}),
    Alias : Joi.string().max(300).messages({}),
    Image : Joi.string().messages({}),
    MoreImages : Joi.array().items(Joi.string()).messages({}),
    Price : Joi.number().required().messages({}),
    PromotionPrice : Joi.number().required().messages({}),
    Description : Joi.string().messages({}),
    HomeFlag: Joi.boolean().messages({}),
    HotFlag: Joi.boolean().messages({}),
    ViewCount: Joi.number().messages({}),
    Quantity : Joi.number().message()
});