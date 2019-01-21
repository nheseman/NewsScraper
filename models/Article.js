// Require Mongoose
const mongoose= require("mongoose"),

// Create database Schema
const Schema = mongoose.Schema;

// Create article scehma
const ArticleSchema = new Schema ({
    
    // Set article schema fields
    title: {},    
    link: {},    
    saved: {},    
    deleted: {},  
    date: {},   
    notes: [{}]
});



// create articles model for export
const Articles = mongoose.model("Articles" , ArticleSchema);

// export Article for other uses
module.exports = Articles;