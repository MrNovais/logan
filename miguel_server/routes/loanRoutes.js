const express = require("express");
const router = express.Router();
const Loan = require("../models/loan");
const loanController = require('../controllers/loanController');

router.post("/loans", loanController.createLoan);


module.exports = router;