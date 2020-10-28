const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DogSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    breed: {
        type: String,
        required: true,
    },
    sex: { 
        type: String,
        // inclusion:{in: ["M", "F"]},
        required: true,
    },
    size: {
        type: String,
        // inclusion:{in: ["xs", "s", "m", "l", "xl"]},
        required: true,
    },
    owner: { type: mongoose.Schema.ObjectId, ref: 'User' }
});

const Dog = mongoose.model("dogs", DogSchema);

module.exports = Dog;
