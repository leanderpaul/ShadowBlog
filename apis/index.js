var auth = require('./auth');
var blog = require('./blog');
var router = require('express').Router();

router.use('/', auth);

router.use('/', blog);

module.exports = router;