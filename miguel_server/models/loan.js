const mongoose = require("mongoose");
const loanSchema = new mongoose.Schema({
userName: { type: String, required: true },
bookTitle: { type: String, required: true },
loanDate: { type: Date, default: Date.now },
returnDate: { type: Date },
});
const Loan = mongoose.model("Loan", loanSchema);
module.exports = Loan;