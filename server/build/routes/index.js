'use strict';

var _accounts = require('./accounts');

var _accounts2 = _interopRequireDefault(_accounts);

var _memo = require('./memo');

var _memo2 = _interopRequireDefault(_memo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var express = require('express');

var router = express.Router();

router.use('/*', function (req, res, next) {
    res.setHeader("Expires", "-1");
    res.setHeader("Cache-Control", "must-revalidate, private");
    next();
});

router.use('/accounts', _accounts2.default);
router.use('/memo', _memo2.default);

module.exports = router;