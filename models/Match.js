const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MatchSchema = new Schema({
    owner: { 
        type: mongoose.Schema.ObjectId, 
        ref: 'User' },
    // dog: { type: mongoose.Schema.ObjectId, ref: 'Dog' },
});

const Match = mongoose.model("dogs", MatchSchema);

module.exports = Match;
