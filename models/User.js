const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  location: { // profile edit component
    type: String,
    required: false
  },
  bio: {
    type: String,
    required: false
  },
  liked_users: {
    type: Array,
    required: false
    //array will look like: ["2","4","6"]
   },
  dog: { type: mongoose.Schema.ObjectId, ref: 'Dog' },
  matches: [{ type: mongoose.Schema.ObjectId, ref: 'User' }],
  
  rejected_users: {
    type: Array,
    required: false
  },
  photos: [{
    type: String,
    required: false
  }]
  //add key for img url
});

const User = mongoose.model("users", UserSchema);

module.exports = User;

