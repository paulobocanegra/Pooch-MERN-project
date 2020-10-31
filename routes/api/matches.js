const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

const Match = require("../../models/Match");
const User = require("../../models/User")

router.post('/', (req, res) => {
   const users = [
      req.body.currentUser, 
      req.body.likedUser];
   let newMatch = new Match({
      matchedUsers: users
   })
   newMatch.save()
   let matchId = newMatch._id;

   User.findByIdAndUpdate(
     { _id: req.body.currentUser },
     {
       $push: {
         matches: matchId
       },
     },
     function (err, result) {
       if (err) {
         res.send(err);
       }
     }
   )
   User.findByIdAndUpdate(
     { _id: req.body.likedUser },
     {
       $push: {
         matches: matchId
       },
     },
     function (err, result) {
       if (err) {
         res.send(err);
       } else {
         res.send(newMatch);
       }
     }
   )
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