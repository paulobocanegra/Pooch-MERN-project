const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateDogUpdateInput(data) {
    let errors = {};

    data.name = validText(data.name) ? data.name : '';
    data.breed = validText(data.breed) ? data.breed : '';

    // if (!Validator.isLength(data.name, { min: 1, max: 30 })) {
    //     errors.name = 'Dog name must be between 1 and 30 characters';
    // }

    // if (Validator.isEmpty(data.name)) {
    //     errors.name = 'Name field is required';
    // }

    // if (!Validator.isLength(data.breed, { min: 1, max: 30 })) {
    //     errors.breed = 'Dog breed must be between 1 and 30 characters';
    // }

    // if (Validator.isEmpty(data.breed)) {
    //     errors.breed = 'Breed field is required';
    // }

    // if (Validator.isEmpty(data.sex)) {
    //     errors.sex = 'Sex field is required';
    // }

    // if (Validator.isEmpty(data.size)) {
    //     errors.size = 'Size field is required';
    // }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    };

};