// Importation :
const express = require('express');
const mongoose = require('mongoose');

const sauceRoutes = require('./routes/sauce');

const app = express();
app.use(express.json());

mongoose.connect('mongodb+srv://n-decressac:NkrOVf4cq61yKHwL@cluster0.wmnsk.mongodb.net/?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('Connexion à MongDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB écouchée !'));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use('/api/sauces', sauceRoutes);

module.exports = app;