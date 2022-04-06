const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const matchdaySchema = new Schema({
   
    name :{
        type:String,
        required:true,
        minlength:1,
        maxlength:30
    },
    image:{
        type:String,
        required:true  
    },
    price: {
        type: String,
        required: true
    },
    
    details: {
        type: String,
        required: true
    }




})

const   Matchday=mongoose.model('matchday',matchdaySchema,'matchCollection');
module.exports= Matchday;
