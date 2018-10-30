const { Joi, celebrate } = require('celebrate');

module.exports = celebrate({
  body: Joi.object().keys({
    name: Joi.string().required(),
    name_father: Joi.string().required(),
    name_mother: Joi.string().required(),
    guardian_name: Joi.string().required(),
    age: Joi.number().required()
  })
})

