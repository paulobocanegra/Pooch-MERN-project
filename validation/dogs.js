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
    // data.age = validText(data.age) ? data.age : '';
    data.breed = validText(data.breed) ? data.breed : '';
    data.sex = validText(data.sex) ? data.sex : '';
    data.size = validText(data.size) ? data.size : '';
    data.bio = validText(data.bio) ? data.bio : '';

    if (!Validator.isLength(data.name, { min: 1, max: 30 })) {
        errors.name = 'Dog name must be between 1 and 30 characters';
    }

    if (Validator.isEmpty(data.name)) {
        errors.name = 'Name field is required';
    }

    if (!Validator.isLength(data.breed, { min: 1, max: 30 })) {
        errors.breed = 'Dog breed must be between 1 and 30 characters';
    }

    if (Validator.isEmpty(data.breed)) {
        errors.breed = 'Breed field is required';
    }

    if (Validator.isEmpty(data.sex)) {
        errors.sex = 'Sex field is required';
    }

    if (Validator.isEmpty(data.size)) {
        errors.size = 'Size field is required';
    }

    if (Validator.isEmpty(data.bio)) {
        errors.bio = 'Bio field is required';
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    };



    };