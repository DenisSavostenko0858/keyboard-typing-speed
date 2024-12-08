const express = require('express');
const rout = express();

rout.get('/', function(req, res) {
    res.render('home_page')
})

module.exports = rout;