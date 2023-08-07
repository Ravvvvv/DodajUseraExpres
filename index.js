const express = require('express')
const app = express();
const hbs = require("express-handlebars");
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/Data');
const Users = require('./app/models/UsersModels')

const usersController = require('./app/controllers/usersController')

//mam tutaj objeki modelu users ktory zostal exportowany z usersmodels.

app.engine('hbs', hbs.engine({ extname: '.hbs' }));
app.set('view engine', "hbs");


app.get("/", function (req, res) {
    Users.find().lean().then((data) => {
        console.log(data);
        //req params . id odwoujemy sie do pola id 
        //data moze miec inna nazwa nazwa tuutaj jest tylko umowna
        res.render("home", {
            users: data
        });
    }).catch((err) => {
        res.send(err)
    })
    // const posts = await Post.find().exec();
    // res.send(posts)
});


app.get('/dane', usersController.index)

app.listen(8080, function () {
    console.log('serwer node.js dziala');
});
