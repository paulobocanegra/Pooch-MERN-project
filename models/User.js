const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: true,
  },
  email: {
    type: String,
    trim: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: false
  },
  dog: { type: mongoose.Schema.ObjectId, ref: 'Dog' }
});

const User = mongoose.model("users", UserSchema);

module.exports = User;


