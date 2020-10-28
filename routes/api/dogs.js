const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

const Dog = require("../../models/Dog");
const validateDogInput = require("../../validation/dogs");

// GET ALL DOGS
router.get("/", 
// passport.authenticate("jwt", { session: false }), 
(req, res) => {
  Dog.find()
    .then((dogs) => res.json(dogs))
    .catch((err) => res.status(404).json({ nodogsfound: "No dogs found" }));
});

// GET A SINGLE DOG BY ID
router.get("/:id", 
// passport.authenticate("jwt", { session: false }), 
(req, res) => {
  Dog.find({ dog: req.params.id })
    .then((dogs) => res.json(dogs))
    .catch((err) =>
      res.status(404).json({ nodogsfound: "No dogs found from that user" })
    );
});

// CREATE AND SAVE A DOG
router.post(
  "/create",
  // passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validateDogInput(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }

    const newDog = new Dog({
      name: req.body.name,
      age: req.body.age,
      breed: req.body.breed,
      sex: req.body.sex,
      size: req.body.size,
      bio: req.body.bio,
      owner: req.body.owner 
    });

    newDog.save().then((dog) => res.json(dog));
  }
);

module.exports = router;
