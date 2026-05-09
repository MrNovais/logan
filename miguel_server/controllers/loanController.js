const Loan = require("../models/loan");

const createLoan = async (req, res) => {
 try {
  const { userName, bookTitle, returnDate } = req.body;
  const newLoan = new Loan({ userName, bookTitle, returnDate });
  await newLoan.save();
  res.status(201).json(newLoan);
} catch (err) {
  res.status(500).json({ error: "Erro ao registrar empréstimo" });
}
};

module.exports = { createLoan };