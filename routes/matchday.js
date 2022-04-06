var express = require("express");
var router = express.Router();
const matchdayModule=require('../Module/matchdayModule')


router.post('/savematchday',matchdayModule.postmatchday)
router.get('/getmatchday',matchdayModule.getmatchday)
router.patch('/updatematchday/:matchdayId',matchdayModule.updatematchday)
router.delete('/deletematchday/:matchdayId',matchdayModule.deletematchday)




module.exports = router;  