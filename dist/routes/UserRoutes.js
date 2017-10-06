'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _fakeData = require('../util/fakeData');

var _fakeData2 = _interopRequireDefault(_fakeData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.get('/test', function (req, res) {
  res.json({
    payload: 'API working as expected'
  });
});

router.post('/', function (req, res) {
  var token = req.body.token;

  console.log('requesting data for', req.body);
  var found = _fakeData2.default.find(function (user) {
    return user.token === token;
  });
  setTimeout(function () {
    if (found) {
      res.json({ payload: found });
    } else {
      res.json({ payload: 'not found' });
    }
  }, 500);
});

exports.default = router;