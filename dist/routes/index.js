'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _AuthRoutes = require('./AuthRoutes');

var _AuthRoutes2 = _interopRequireDefault(_AuthRoutes);

var _UserRoutes = require('./UserRoutes');

var _UserRoutes2 = _interopRequireDefault(_UserRoutes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, X-Access-Token');

  // intercepts OPTIONS method
  if (req.method === 'OPTIONS') {
    // respond with 200
    res.sendStatus(200);
  } else {
    // move on
    next();
  }
});

router.use('/user', _UserRoutes2.default);
router.use('/auth', _AuthRoutes2.default);

router.all('/', function (req, res) {
  res.status(200).json({ payload: 'Facebook JS Laboratoria API' });
});

router.use(function (req, res) {
  res.status(404).json({
    payload: 'Parece que te equivocaste en acceder.'
  });
});

exports.default = router;