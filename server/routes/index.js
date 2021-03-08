/*  File -index.js
    Student Name - Devanshi Shah
    Student Id- 301175169 
    Web App Name - COMP229-W2021-MIDTERM-301175169*/



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
