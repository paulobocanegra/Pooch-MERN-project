const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MatchSchema = new Schema({
    matchedUsers: [{ 
        type: mongoose.Schema.ObjectId, 
        ref: 'User' }],
    messages: [{type: String}]
});

const Match = mongoose.model("dogs", MatchSchema);

module.exports = Match;
