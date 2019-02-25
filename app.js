const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');




const app = express();

app.use(bodyParser.urlencoded({useNewUrlParser: true}));



mongoose.connect('mongodb+srv://Ben:epitaph311@myfirstcluster-1t85r.mongodb.net/test?retryWrites=true')
    .then(result => {
        console.log(result);
        app.listen(5000);
    }).catch(err => {
        console.log(err);
    })