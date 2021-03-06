/**
 * Name : Jaivin James
 * Student ID: 301177233
 * Date: 28 October 2021
 * File Name: COMP229 F2021 MidTerm Start
 */

// modules required for routing
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// define the game model
let book = require('../models/books');

/* GET home page. wildcard */
router.get('/', (req, res, next) => {
  res.render('content/index', {
    title: 'Home',
    books: ''
   });
});

module.exports = router;
