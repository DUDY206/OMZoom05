const Joi = require('joi');

//validate register
const registerValidation = (data) => {
    const schema = Joi.object({
        name:Joi.string().min(6).required(),
        email:Joi.string().min(6).required().email(),
        password:Joi.string().min(6).required(),
    })

    const {error,value} =  schema.validate(data);
    if(!error) return null;

}

const messageValidation = (data) => {
    const schema = Joi.object({
        message:Joi.string().min(1).required()
    })
    return schema.validate(data);
}

module.exports.registerValidation = registerValidation;
module.exports.messageValidation = messageValidation;