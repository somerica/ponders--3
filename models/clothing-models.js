const mongoose = require('mongoose')

const Schema = mongoose.Schema 

const Clothingschema = new Schema({
title: {
    type: String,
    trim:true,
    required: "Add new Item",
},
description:{
     trim: String,
    required:true,
},
price:{
    type: Number,
    required: "Enter a clothing price",
},
imageURL:{
    type: String,
    trim:true,
    required: "Enter clothing image",
},
category:{
    type:String,
    trim: true,
    required:"Enter a clothing category",
},


});

const Clothing = mongoose.model("Transaction" ,clothingSchema);

module.exports= mongoose.model('clothing', Clothing)