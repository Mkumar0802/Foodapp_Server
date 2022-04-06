const Matchday = require('../Model/Matchday');
const Joi = require('joi');

///////// create movie ///////////////////
exports.postmatchday = async (req, res, next) => {
    //joi validate schema
    const schema = Joi.object({
        name: Joi.string().min(1).max(30).required(),
        image: Joi.string().required(),
        price: Joi.string().required(),
        details: Joi.string().required(),
        

    })
    // joi validate input data
    var { error } = await schema.validate(req.body);
    if (error) {
        return res.status(400).send({ msg: error.details[0].message })
    }
    res.send('success')

    ////////////////// save data in mongodb using mongoose //////////////
    const matchday = new Matchday({
        name: req.body.name,
        image: req.body.image,
        price: req.body.price,
        details: req.body.details,
        
    })
    try {
        var response = await matchday.save();
        res.send(response)
    } catch (err) {
        res.status(400).send(err)
    }
}

//////////////////////// get movie ///////////////////
exports.getmatchday = async (req, res, next) => {
    const response = await Matchday.find();
    res.send(response);
}

exports.updatematchday = async (req, res, next) => {
    const { matchdayId } = req.params;   // object destructure
    const response = await Matchday.findByIdAndUpdate(matchdayId, {
        name: req.body.name,
        image: req.body.image,
        price: req.body.price,
        details: req.body.details,
        
    });
    res.send(response);
}

////////// delete movie /////////////// 
exports.deletematchday = async (req, res, next) => {
    const { matchdayId } = req.params;   // object destructure 
    const response = await Matchday.findByIdAndRemove(matchdayId)
    res.send(response);
}