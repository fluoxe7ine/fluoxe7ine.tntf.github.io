const express = require('express'),
      path = require('path'),
      bodyParser = require('body-parser'),
      cors = require('cors'),
      mongoose = require('mongoose');

      mongoose.Promise = global.Promise;
      mongoose.connect('mongodb://tntf-admin:admin@ds046677.mlab.com:46677/highscores')
      .then(() => {console.log('Database is connected') },
      err => { console.log('Can not connect to the database'+ err)}
      );

      const app = express();
      var port = process.env.PORT || 4000;
      var server = app.listen(function(){
        console.log('Listening on port ' + port);
      });
