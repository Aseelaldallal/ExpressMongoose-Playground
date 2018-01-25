const mongoose = require('./db/mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const Parent = require('./models/parent');
const Post = require('./models/post');

const app = express(); //App is now an instance of our express server
const PORT = process.env.PORT || 3000;

//Body Parser it parses the body of our clients requests
//Everytime our client sends some sort of information to our server
//It'll transform it into JSON - for our DB
app.use(bodyParser.json());
//This middleware allows our form data to be used in our server
app.use(bodyParser.urlencoded({ extended: true }));

//lets make a simple get request to get some sort of response from our server
app.get('/', (req, res) => {
  res.send('Hello World');
});

app.post('/parent', (req, res) => {
  //req.body is = the JSON information sent from client
  //req.body comes from bodyParser middleware
  const parent = new Parent(req.body);
  parent
    .save()
    .then(parent => {
      res.send(parent);
    })
    .catch(err => {
      res.status(400).send(err);
    });
});

app.get('/parent', (req, res) => {
  Parent.find({})
    .then(parents => {
      res.send(parents);
    })
    .catch(err => {
      res.status(400).send(err);
    });
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
