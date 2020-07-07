const Joi = require("@hapi/joi");
const {
  _REGEX_MAIL,
  _REGEX_PHONE,
} = require("../../core/Constant/regularExpression.constant");
const { ABORT_EARLY } = require("../../core/configuration/validation.config");


const userValidationSchema = Joi.object().keys({
  name: Joi
  .string()
  .empty()
  .required()
  .min(2)
  .max(100)
  .message({
    'string.base' :'name_must_be_string',
    'string.empty': 'name_is_not_empty',
    'string.required':'name_must_be_required',
    'string.min':'name_min_length_is_6_character',
    'string.max': 'name_max_length_is_100_character'
  })
  
  ,password: Joi
  .string()
  .required()
  .empty()
  .min(6)
  .max(30)
  .messages({
    'string.base': 'password_must_be_string',
    'string.required' : 'password_must_be_required',
    'string.min': '',
    'string.max':''
  })
  
  ,phone: Joi
  .string()
  .pattern(new RegExp(_REGEX_PHONE))
  .messages({
    "string.pattern.base": "Phone invalid"
  })
  
,email: Joi
.string()
.pattern(new RegExp(_REGEX_MAIL))
.message({
    "string.pattern.base": "Email invalid",
  }),

  is_delete: Joi
  .boolean()

  ,last_login: Joi
  .date()

  ,is_admin: Joi
  .boolean()
  
  ,created_by: Joi
  .date()

  ,created_at: Joi
  .date()
  
  ,update_at: Joi
  .date()
});

const userValidation = async (user) => {
  const erros = [];
  const { value,error } = await userValidationSchema.validate(user, ABORT_EARLY);
  if(error){


    for(i = 0; i<error.details.length; i++){
      const getMessage = await messageService.getByKey('')
    }

  }
};

module.exports = { userValidation };
