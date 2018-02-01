const express = require('express'),
      path = require('path'),
      bodyParser = require('body-parser'),
      cors = require('cors'),
      mongoose = require('mongoose');

      mongoose.Promise = global.Promise;
      mongoose.connect('mongodb://fluoxe7ine:tntf-password@highscores-shard-00-00-ipfju.mongodb.net:27017,highscores-shard-00-01-ipfju.mongodb.net:27017,highscores-shard-00-02-ipfju.mongodb.net:27017/highscores?ssl=true&replicaSet=highscores-shard-0&authSource=admin')
      .then(() => {console.log('Database is connected') },
      err => { console.log('Can not connect to the database'+ err)}
      );

      const app = express();
      var port = process.env.PORT || 4000;
      var server = app.listen(function(){
        console.log('Listening on port ' + port);
      });
