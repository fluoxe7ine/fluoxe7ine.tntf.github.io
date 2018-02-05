const express = require('express'),
      path = require('path'),
      bodyParser = require('body-parser'),
      cors = require('cors'),
      mongoose = require('mongoose');
      serveStatic = require('serve-static');
const Highscore = require('./models/highscore');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://fluoxe7ine:tntf-password@ds046677.mlab.com:46677/highscores')
.then(() => {console.log('Database is connected') },
err => { console.log('Can not connect to the database'+ err)}
);

const app = express();
app.use(bodyParser.json());

var port = process.env.PORT || 5000;
app.listen(port);

app.use(serveStatic(__dirname + "/dist"));

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

app.get('/highscore', (req, res) => {
  Highscore.find({}).sort({value: -1}).limit(10).exec(function(err, docs) {
    if (err) res.send ('something wrong ' + err);
    res.json(docs);
});
});
