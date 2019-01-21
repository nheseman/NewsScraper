//Set requirements
const express = require("express");
const mongoose = require("mongoose");
const axios = require("axios");
const cheerio = require("cheerio");

// Require all models
const db = require("./models");
const PORT = process.env.PORT || 3000;

// Express
const app = express();

// Configure Middleware packages
//
//
// Connect to the Mongo DB
//
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";
mongoose.connect(MONGODB_URI);
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
// Start the server

