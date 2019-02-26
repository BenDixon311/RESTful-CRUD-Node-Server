const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();


const playerRoutes = require('./routes/edit-route');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false, useNewUrlParser: true}));



app.use('/', playerRoutes);


mongoose.connect('mongodb+srv://Ben:epitaph311@myfirstcluster-1t85r.mongodb.net/players?retryWrites=true', {useNewUrlParser: true})
    .then(result => {
        app.listen(process.env.port || 5000);
        console.log("Express server listening");
    }).catch(err => {
        console.log(err);
    })