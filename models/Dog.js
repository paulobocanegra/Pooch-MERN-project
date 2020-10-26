const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DogSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Integer,
        required: true,
    },
    breed: {
        type: String,
        required: true,
    },
    sex: {
        type: String,
        inclusion:{in: ["m", "f"]},
        required: true,
    },
    size: {
        type: String,
        inclusion:{in: ["xs", "s", "m", "l", "xl"]},
        required: true,
    },
});

const Dog = mongoose.model("users", DogSchema);

module.exports = User;
