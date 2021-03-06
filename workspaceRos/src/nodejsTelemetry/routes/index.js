const express = require('express');
const { check, validationResult } = require('express-validator');

const router = express.Router();

router.get('/', (req, res) => {
    res.render('telemetry', { title: 'Telemetry' });
});
router.get('/telemetry', (req, res) => {
  res.render('telemetry', { title: 'Telemetry' });
});

router.get('/mission', (req, res) => {
  res.render('mission', { title: 'Mission editor' });
});

router.get('/settings', (req, res) => {
  res.render('settings', { title: 'Configuration' });
});

router.get('/roslog', (req, res) => {
  res.render('roslog', { title: 'ROS logging output' });
});

router.get('/routing', (req, res) => {
  res.render('routing', { title: 'Routing interface' });
});

router.get('/attitude', (req, res) => {
    Attitude.find()
      .then((attitude) => {
        res.send(attitude);
      })
      .catch(() => { res.send('Sorry! Something went wrong.'); });
  });

module.exports = router;