const Joi = require("joi");

module.exports.listingSchema = Joi.object({
          listing : Joi.object({
          title : Joi.string().required(),
          description : Joi.string().required(),
          price : Joi.number().required().min(0),
          img: Joi.string().required(),
          country : Joi.string().required(),
          location : Joi.string().required()
          }).required(),


});


module.exports.reviewSchema = Joi.object({
      review : Joi.object({
        rating : Joi.number().required(),
        comment : Joi.string().required(),
      }).required(),
});