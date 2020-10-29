const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ImageSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  date: {
    type: Date,
    default: Date.now
  },
  src: {
    type: String,
    required: true
  },
  fileName: {
    type: String,
    required: true
  }
});

const Image = mongoose.model("images", ImageSchema);
module.exports = Image;
