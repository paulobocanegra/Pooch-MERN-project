const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MatchSchema = new Schema({
    matchedUsers: [{ 
        type: mongoose.Schema.ObjectId, 
        ref: 'User' }],
    messages: [{type: Object}]
});

const Match = mongoose.model("matches", MatchSchema);

module.exports = Match;
