const express = require('express');
const homeController = require('../controller/home-controller');
const rout = express();

rout.get('/', homeController.renderPage)

module.exports = rout;