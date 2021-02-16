const mongoose = require('mongoose')
const Schema = mongoose.Schema 

const Clothing = new Schema(
{
    item:{type: String ,required:true },
    price:{type: Number,required:true },
    detail:{type: String, required: true },


},

)

module.exports= mongoose.model('clothing', Clothing)