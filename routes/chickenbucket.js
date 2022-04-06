const express = require('express');
const router=express.Router();
const chickenbucketModule=require('../Module/chickenbucketModule');

router.post('/savechickenbucket',chickenbucketModule.postchickenbucket);
router.get('/getchickenbucket',chickenbucketModule.getchickenbucket);
router.patch('/updatechickenbucket/:chickenId',chickenbucketModule.updatechickenbucket);
router.delete('/deletechickenbucket/:chickenId',chickenbucketModule.deletechickenbucket);

module.exports = router;