const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const chickenbucketSchema = new Schema({
    name :{
        type:String,
        required:true,
        minlength:1,
        maxlength:30
    },
    photo:{
        type:String,
        required:true  
    },
    price:{
        type:String,
        required:true
    },
    details:{
        type:String,
        required:true
    }
})

const Chickenbucket =mongoose.model('chickenbucket',chickenbucketSchema,'chickenbucketCollection');
module.exports = Chickenbucket;