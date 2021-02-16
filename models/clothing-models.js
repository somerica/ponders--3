const mongoose = require('mongoose')
const Schema = mongoose.Schema 

const Cleaners = new Schema(
{
    item:{type: String ,required:true },
    price:{type: Number,required:true },
    detail:{type: String, required: true },


},

)

module.exports= mongoose.model('cleaners', Clesners)