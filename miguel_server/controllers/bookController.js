const Book = require("../models/book");

const createBook = async (req, res) => {
 try {
   const { title, author, year, genre } = req.body;
   const newBook = new Book({ title, author, year, genre });
   await newBook.save();
   res.status(201).json(newBook);
 } catch (err) {
   res.status(500).json({ error: "Erro ao criar livro" });
 }
};

const listBook = async (_req, res) => {
 try {
   const books = await Book.find();
   res.json(books);
 } catch (err) {
   res.status(500).json({ error: "Erro ao buscar livros" });
 }
};

const someBook =  async (req, res) => {
 try {
   const { id } = req.params;
   const book = await Book.findById(id);


   if (!book) {
     return res.status(404).json({ error: "Livro não encontrado" });
   }


   res.json(book);
 } catch (err) {
   res.status(500).json({ error: "Erro ao buscar livro" });
 }
};

const updateBook =  async (req, res) => {
 try {   const { id } = req.params;
   const updates = req.body;
   const options = { new: true, runValidators: true };


   const updateBook = await Book.findByIdAndUpdate(id, updates, options);
   if (!updateBook)
     return res.status(404).json({ error: "Livro não encontrado" });


   res.json(updateBook);
 } catch (err) {
   res.status(500).json({ error: "Erro ao atualizar livro." });
 }
};

const deleteBook =  async (req, res) => {
  try { const { id } = req.params;
     const deletedBook = await Book.findByIdAndDelete(id);
     if (!deletedBook)
       return res.status(404).json({ error: "Livro não encontrado" });
     res.json({ message: "Livro excluído com sucesso" });
   } catch (err) {
     res.status(500).json({ error: "Erro ao excluir livro" });
   }
  });

module.exports = { createBook, listBook, someBook, updateBook, deleteBook };