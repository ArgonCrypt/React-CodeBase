const express = require("express");
const recordRoutes = express.Router();
const database = require("./connectToDb");
recordRoutes.route("/cards").get(async function (req, res) {
  //Get request on /cards;
  const dbConnection = database.getDb();
  dbConnection
    .collection("cards")
    .find({})
    .toArray(function (err, result) {
      if (err) {
        res.status(400).send("Error fetching cards...");
      } else res.json(result);
    });
});
recordRoutes.route("/cards").post(async function (req, res) {
  //Post request on /cards
  const dbConnection = database.getDb();
  const availableLanguages = [
    "C#",
    "JS",
    "Python",
    "Java",
    "SQL",
    "C",
    "Carbon",
    "C++",
  ];
  if (!availableLanguages.includes(req.body.languages)) {
    console.error("Post request failed.Passed language property isn't valid.");
  }
  //To process the post request,must match document.
  const matchDocument = {
    languages: req.body.languages,
    title: req.body.title,
    code: req.body.code,
  };
  dbConnection
    .collection("cards")
    .insertOne(matchDocument, function (err, result) {
      if (err) {
        res.status(400).send("Could not post the request.");
      } else {
        console.log("Post request sent succesfully");
        res.status(205).send();
      }
    });
});

recordRoutes.route("/cards").delete((req, res) => {
  //Delete request on /cards
  const dbConnection = database.getDb();
  console.log(req.data);
  const filter = req.data;

  dbConnection.collection("cards").deleteOne(filter, (err, result) => {
    if (err) {
      res.status(400).send("Error deleting card with title:" + filter.title);
    } else {
      console.log("Card with title" + filter.title + " deleted.");
    }
  });
});
module.exports = recordRoutes;
