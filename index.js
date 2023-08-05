const express = require('express')
const app = express();
const hbs = require("express-handlebars");
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/expresZadanie');
const Users = require('./app/models/UsersModels')

//mam tutaj objeki modelu users ktory zostal exportowany z usersmodels.

app.engine('hbs', hbs.engine({ extname: '.hbs' }));
app.set('view engine', "hbs");


app.get("/mongoose/:id", function (req, res) {
    Users.find(req.params.id).then((data) => {
        //req params . id odwoujemy sie do pola id 
        //data moze miec inna nazwa nazwa tuutaj jest tylko umowna
        res.render("home", {
            name: data.name,
            username: data.username,
            email: data.email,
            address: data.address,
            phone: data.phone,
            website: data.website,
            company: data.company,
        });
    }).catch((err) => {
        res.send(err)
    })
    // const posts = await Post.find().exec();
    // res.send(posts)
});




app.listen(8080, function () {
    console.log('serwer node.js dziala');
});
