'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _fakeData = require('../util/fakeData');

var _fakeData2 = _interopRequireDefault(_fakeData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.post('/', function (req, res) {
  var _req$body = req.body,
      username = _req$body.username,
      password = _req$body.password;

  console.log(req.body);
  var found = _fakeData2.default.find(function (user) {
    return user.username === username && user.password === password;
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