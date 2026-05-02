const mongoose = require('mongoose');


const connectDB = async () => {
 try {
   await mongoose.connect('mongodb+srv://admin:admin@cluster0.vmonwas.mongodb.net/?appName=Cluster0');
   console.log('MongoDB conectado!');
 } catch (err) {
   console.error('MongoDB te mogou:', err);   
   process.exit(1);
 }
};


module.exports = connectDB;