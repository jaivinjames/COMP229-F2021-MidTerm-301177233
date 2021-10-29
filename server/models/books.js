/**
 * Name : Jaivin James
 * Student ID: 301177233
 * Date: 28 October 2021
 * File Name: COMP229 F2021 MidTerm Start
 */

let mongoose = require('mongoose');

// create a model class
let Book = mongoose.Schema({
    title: String,
    description: String,
    price: Number,
    author: String,
    genre: String
},
{
  collection: "books"
});

module.exports = mongoose.model('Book', Book);
