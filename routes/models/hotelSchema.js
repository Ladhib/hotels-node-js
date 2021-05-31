var mongoose = require('mongoose')
var Schema = mongoose.Schema

const hotelModel = new Schema ({

 Name: {type : String},
 adress : {type: String},
 marketingText :{ type: String},
 localisation : {type:String},
 description : {type : String},
 offreAndPrice : [],
 image: {type : String},
 price:{type:Number}

})
module.exports=mongoose.model("hotel", hotelModel)