const express = require('express');
const mongoose = require('mongoose');
const UserRoutes = require('./routes/UserRoutes.js');

const app = express();
app.use(express.json());

mongoose.connect('mongodb+srv://User:contrasena123@cluster1.qbnwblu.mongodb.net/Lab04?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(success => {
    console.log('Connection to database established')
  }).catch(err => {
    console.log(err)
  });
  
  app.use(UserRoutes);
  
  app.listen(3000, () => { console.log('Server is running on port 3000') });