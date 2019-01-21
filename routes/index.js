//Set Dependencies and Router
const express = require('express');
const router = express.Router();
const cheerio = require("cheerio");
//
//
// Require models
const Notes = require('../models/Note.js')
const Article = require('../models/Article.js')
// 
// Set a route for web scraping and storing to db
//    
// 
// Set Get route to retrieve all articles from the db
//
//
// Set Get route to retrieve specific articles by id from the db
//
//
// Set a Put route for updating whether an article is saved
//
//
// Set a Post route for add and update notes
//
// Set a Delete route to remove a saved article
//
//
// Export router