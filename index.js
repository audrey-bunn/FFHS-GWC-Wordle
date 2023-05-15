//Back End - Initializes server, generates words, and passes them to front end
function initialize() {
  //Initialize Express framework/ Node server
  const express = require('express');
  const app = express();
  const router = express.Router();
  const port = 3000;
  const path = require('path')
  //Alow Cors policy to communicate from server to front end
  const cors = require('cors');
  app.use(cors());

  app.use(express.static('public'));
  app.use('/static', express.static('public'));


  //Send word list
  app.get('/words', (req, res) => {
  //Initialize word list
    m = require('./module');
    res.json(m.generateWordList());
  });
  

  //Start server on port 3000 and log that its running
    let server = app.listen(port, function() {
    console.log("App server is running on port 3000");
  });
}


//Main
initialize();
