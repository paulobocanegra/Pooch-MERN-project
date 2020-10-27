const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateDogInput(data) {
  let errors = {};
  
  // name: req.body.name,
  // age: req.body.age,
  // breed: req.body.breed,
  // sex: req.body.sex,
  // size: req.body.size,
  // user_id: req.body.user_id,
  // bio: req.body.bio,

    data.name = validText(data.name) ? data.name : '';

    if (!Validator.isLength(data.name, { min: 1, max: 140 })) {
        errors.name = 'Dog name must be between 5 and 140 characters';
    }

    if (Validator.isEmpty(data.name)) {
        errors.name = 'Name field is required';
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    };



    };