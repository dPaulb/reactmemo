import accounts from './accounts';
import memo from './memo';
var express = require('express');


var router = express.Router();

router.use('/*', (req, res, next) => {
    res.setHeader("Expires", "-1");
    res.setHeader("Cache-Control", "must-revalidate, private");
    next();
});

router.use('/accounts', accounts);
router.use('/memo', memo);

module.exports = router;
