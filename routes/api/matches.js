const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

const Match = require("../../models/Match");

router.post('/', (req, res) => {
   const users = [
      req.body.currentUser, 
      req.body.likedUser];
   let newMatch = new Match({
      matchedUsers: users
   })
   newMatch.save()
      .then((match) => res.json(match))
      .catch((err) => console.log(err))
})

router.get('/:matchId', (req, res) => {
   Match.findById(
      { _id: req.params.matchId},
      function(err, result) {
         if (err) {
         res.send(err);
         } else {
         res.send(result);
         }
   });
})

router.patch('/:matchId', (req, res) => {
   Match.findByIdAndUpdate(
      { _id: req.params.matchId },
      { $push: { messages: {
         body: req.body.body,
         author: req.body.author,
         time: req.body.time
      }}},
      function(err, result) {
         if (err) {
         res.send(err);
         } else {
         res.send(result);
         }
      }
   )
})
module.exports = router;