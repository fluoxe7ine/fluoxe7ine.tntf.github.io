const express = require('express'),
      path = require('path'),
      bodyParser = require('body-parser'),
      cors = require('cors'),
      mongoose = require('mongoose');
const Highscore = require('./models/highscore');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://fluoxe7ine:tntf-password@ds046677.mlab.com:46677/highscores')
.then(() => {console.log('Database is connected') },
err => { console.log('Can not connect to the database'+ err)}
);

const app = express();
app.use(bodyParser.json());

app.use(cors({
  origin: 'http://localhost:8080',
  credentials: true
}));

app.listen(3000, function(){
      console.log('Listening on port 3000');
});

app.post('/highscore', (req, res) => {
  let score = new Highscore({
    name: req.body.name,
    value: req.body.value
  });
      score
      .save()
      .then(score => res.send(score))
      .catch(err => res.send(err));
});
