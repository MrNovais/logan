const express = require("express");
const router = express.Router();
const express = require("express");
const validateTitle = require("../middlewares/validateTitle");
const Book = require("../models/book");

const bookController = require('../controllers/bookController');
const { validate } = require("../models/user");

router.post("/books", validateTitle, bookController.createBook);

router.get("/books", bookController.listBook );

router.get("/books/:id", bookController.someBook );

module.exports = router;