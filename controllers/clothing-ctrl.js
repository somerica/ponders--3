const express = require("express");
const router = express.Router();
const Clothing = require("../models/clothing");

router.get("/", (req, res) => {
  Clothing.find()
    .then((clothing) => {
      res.json(clothing);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).end();
    });
});

router.post("/", (req, res) => {
  console.log(req.body);
  Clothing.create(req.body).then((NewClothingItem) => {
    console.log(NewClothingItem);
    res.json(NewClothingItem);
  });
});

module.exports = router;
