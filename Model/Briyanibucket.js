const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const briyanibucketSchema = new Schema({
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

const Briyanibucket =mongoose.model('briyanibucket',briyanibucketSchema ,'briyanibucketCollection');
module.exports = Briyanibucket;