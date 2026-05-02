const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
 name: { type: String, required: [true, "O nome  é sobrenome obrigatório"], minlength: [3, "O nome e sobrenome deve ter pelo menos 3 caracteres"] },
 email: { type: String,  required: [true, "O email é obrigatório"], minlength: [11, "O email  deve ter pelo menos 11 caracteres"] },
 phone: { type: String,  required: [true, "O número é obrigatório"], minlength: [12, "O numero deve ter pelo menos 12 numeros"] },
 createdAt: { type: Date, defau0lt: Date.now }
});

const User = mongoose.model('User', userSchema);


module.exports = User;