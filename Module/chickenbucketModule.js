const Chickenbucket = require('../Model/Chickenbucket');
const Joi = require('joi');

///////// create movie ///////////////////
exports.postchickenbucket = async (req,res,next)=>{
    //joi validate schema
        const schema = Joi.object({
            name: Joi.string().min(1).max(30).required(),
            photo: Joi.string().required(),
            price: Joi.string().required(),
            details: Joi.string().required(),
    })
    // joi validate input data
    var {error} = await schema.validate(req.body);
    if(error){
        return res.status(400).send({msg:error.details[0].message})
    }
    res.send('success')
    
    ////////////////// save data in mongodb using mongoose //////////////
    const chickenbucket = new Chickenbucket({ 
        name: req.body.name,
        photo: req.body.photo,
        price: req.body.price,
        details: req.body.details, 
    })
    try{
    var response=await chickenbucket.save();  
    res.send(response) 
    } catch(err){
    res.status(400).send(err)
    }
}

///////////////// get movie //////////////////
exports.getchickenbucket = async (req,res,next)=>{
    const response = await Chickenbucket.find();
    res.send(response);
}
 
////////// update theatre name & address ///////////////
exports.updatechickenbucket = async (req,res,next)=>{
    const {chickenId} = req.params;   // object destructure
    const response = await Chickenbucket.findByIdAndUpdate(chickenId,{
        name: req.body.name,
        photo: req.body.photo,
        price: req.body.price,
        details: req.body.details,
    });
    res.send(response);  
}

////////// delete theatre ///////////////
exports.deletechickenbucket = async (req,res,next)=>{  
    const {chickenId} = req.params;   // object destructure
    const response = await Chickenbucket.findByIdAndRemove(chickenId)
    res.send(response);
}