const mongoose = require('./db/mongoose'),
  express = require('express'),
  bodyParser = require('body-parser'),
  app = express(),
  port = process.env.PORT || 3000;

// Body Parser parses the body of our client's request
// When client sends info to our server, it'll transform it into JSON
app.use(bodyParser.json());
// This middleware allows are form data to be used in our server
app.use(bodyParser.urlencoded({ extended: true }));

// Let's make a simple request to get some sort of response from our server
app.get('/', (req, res) => {
  res.send('HELLO WORLD');
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
