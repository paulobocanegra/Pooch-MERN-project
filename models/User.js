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
  location: {
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
  dog: { type: mongoose.Schema.ObjectId, ref: 'Dog' }
});

const User = mongoose.model("users", UserSchema);

module.exports = User;


// const EventsModel = new Schema({
//   eventType: String,
//   date: { type: String, default: new Date() },
//   User: String
// })

// EventsModel.statics.logEvent = function (val, cb) {
//   const eventObj = new this(val);
//   eventObj.save(cb)

// }

// EventsModel.statics.getAll = function (cb) {
//   return this.find(cb)
// }