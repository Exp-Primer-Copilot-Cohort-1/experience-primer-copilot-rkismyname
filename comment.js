// Create web server
// Create database connection
// Create routes
// Create API
// Create test
// Create UI

// 1. Create web server
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors');

// 2. Create database connection
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/comment', { useNewUrlParser: true });
var Comment = require('./models/comment');

// 3. Create routes
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// 4. Create API
// GET
app.get('/comments', function(req, res) {
    Comment.find(function(err, comments) {
        if (err) {
            res.send(err);
        }
        res.json(comments);
    });
});

// POST
app.post('/comments', function(req, res) {
    var comment = new Comment();
    comment.author = req.body.author;
    comment.text = req.body.text;

    comment.save(function(err) {
        if (err) {
            res.send(err);
        }
        res.json({ message: 'Comment successfully added!' });
    });
});

// 5. Create test
// 6. Create UI
app.listen(3000, function() {
    console.log('Simple comment system running on port 3000!');
});