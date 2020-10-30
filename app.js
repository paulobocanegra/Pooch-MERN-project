const mongoose = require("mongoose");
const passport = require("passport");
const express = require("express");
const app = express();
const db = require("./config/keys").mongoURI;
const bodyParser = require("body-parser");
const users = require("./routes/api/users");
const matches = require("./routes/api/matches");
// const images = require("./routes/api/images");
const path = require('path');
const cors = require("cors");
/** */
const multer = require("multer");
var AWS = require("aws-sdk");
/** */

const dogs = require("./routes/api/dogs");

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('frontend/build'));
  app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
  })
}

mongoose
.connect(db, { useNewUrlParser: true })
.then(() => console.log("Connected to mongoDB"))
.catch(err => console.log(err));

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use(passport.initialize());
require("./config/passport")(passport);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api/users", users);
app.use("/api/dogs", dogs);
app.use("/api/matches", matches);
// app.user("/api/images", images)
// app.use('api/users/current', users);

const port = process.env.PORT || 5000;

app.listen(port, () => { console.log(`Listening on port ${port}`) });
app.use(cors());
