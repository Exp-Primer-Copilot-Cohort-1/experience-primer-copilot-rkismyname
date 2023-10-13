// Create web server

// Load modules
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var mongoose = require('mongoose');

// Connect to Mongoose
mongoose.connect('mongodb://localhost/comment');
var db = mongoose.connection;

// Check connection
db.once('open', function(){
	console.log('Connected to MongoDB');
});

// Check for DB errors
db.on('error', function(err){
	console.log(err);
});

// Bring in models
var Comment = require('./models/comment');

// Load view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Set public folder
app.use(express.static(path.join(__dirname, 'public')));

// Home route
app.get('/', function(req, res){
	Comment.find({}, function(err, comments){
		if(err){
			console.log(err);
		} else {
			res.render('index', {
				title: 'Comments',
				comments: comments
			});
		}
	});
});

// Add comment route
app.get('/comment/add', function(req, res){
	res.render('add_comment', {
		title: 'Add Comment'
	});
});

// Add submit POST route
app.post('/comments/add', function(req, res){
	var comment = new Comment();
	comment.name = req.body.name;
	comment.comment = req.body.comment;

	comment.save(function(err){
		if(err){
			console.log(err);
			return;
		} else {
			res.redirect('/');
		}
	});
});

// Edit comment route
app.get('/comment/edit/:id', function(req, res){
	Comment.findById(req.params.id, function(err, comment){
		res.render('edit_comment', {
			title: 'Edit Comment',
			comment: comment
		});
	});
});

// Edit submit POST route
app.post('/comments/edit/:id', function(req, res){
	var comment = {};
	comment.name = req.body.name;
	comment.comment = req.body.comment;

	var query = {_id:req.params.id}

	Comment.update(query, comment, function(err){
		if(err){
			console.log(err);
			return;
		} else {
			res.redirect('/');
		}
	});
});

// Delete comment route
app.delete('/comment/:id', function(req, res){
	var query = {_id};
    Comment.remove(query, function(err){
        if(err){
            console.log(err);
        }
        res.send('Success');
    });});
