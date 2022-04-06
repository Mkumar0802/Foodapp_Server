const express = require('express');
const router=express.Router();
const briyanibucketModule=require('../Module/briyanibucketModule');

router.post('/savebriyanibucket',briyanibucketModule.postbriyanibucket);
router.get('/getbriyanibucket',briyanibucketModule.getbriyanibucket);
router.patch('/updatebriyanibucket/:chickenId',briyanibucketModule.updatebriyanibucket);
router.delete('/deletebriyanibucket/:chickenId',briyanibucketModule.deletebriyanibucket);

module.exports = router;