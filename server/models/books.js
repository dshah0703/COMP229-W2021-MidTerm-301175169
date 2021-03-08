/*  File -books.js
    Student Name - Devanshi Shah
    Student Id- 301175169 
    Web App Name - COMP229-W2021-MIDTERM-301175169*/



let mongoose = require('mongoose');

// create a model class
let Book = mongoose.Schema({
    Title: String,
    Description: String,
    Price: Number,
    Author: String,
    Genre: String
},
{
  collection: "books"
});

module.exports = mongoose.model('Book', Book);
