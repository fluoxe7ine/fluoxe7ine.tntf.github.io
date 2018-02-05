const express = require('express');
const router = express.Router();

const Highscore = require('../models/highscore');

router.post('/', (req,res) =>
  const score = new Highscore({
    name: req.body.name,
    value: req.body.value
  });
  score.save()
  res.json({
    createdScore : score
  });
);
