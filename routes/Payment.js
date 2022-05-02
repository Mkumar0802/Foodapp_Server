var express = require("express");
var router = express.Router();

const PaymentModule = require('../Module/PaymentModule')

router.post("/orders",PaymentModule.orders );

router.post("/verify",PaymentModule.verify );


module.exports = router;