const Briyanibucket = require('../Model/briyanibucket');
const Joi = require('joi');

///////// create movie ///////////////////
exports.postbriyanibucket = async (req,res,next)=>{
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
    const briyanibucket = new Briyanibucket({ 
        name: req.body.name,
        photo: req.body.photo,
        price: req.body.price,
        details: req.body.details, 
    })
    try{
    var response=await briyanibucket.save();  
    res.send(response) 
    } catch(err){
    res.status(400).send(err)
    }
}

///////////////// get movie //////////////////
exports.getbriyanibucket = async (req,res,next)=>{
    const response = await Briyanibucket.find();
    res.send(response);
}
 
////////// update theatre name & address ///////////////
exports.updatebriyanibucket = async (req,res,next)=>{
    const {briyaniId} = req.params;   // object destructure
    const response = await Briyanibucket.findByIdAndUpdate(briyaniId,{
        name: req.body.name,
        photo: req.body.photo,
        price: req.body.price,
        details: req.body.details,
    });
    res.send(response);  
}

////////// delete theatre ///////////////
exports.deletebriyanibucket = async (req,res,next)=>{  
    const {briyaniId} = req.params;   // object destructure
    const response = await Briyanibucket.findByIdAndRemove(briyaniId)
    res.send(response);
}