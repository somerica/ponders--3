const express = require("express");
const router = express.Router();
const Clothing = require("../models/clothing");

router.get("/", (req,res) => {
    Clothing.find()
    .then((clothing) => {
        res.json(clothing);
    })
    .catch((err)=> {
        console.log(err);
        res.status(500).end();
    });
});

module.exports = router;
