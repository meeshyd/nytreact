//Include models to sync table data
var Article = require('../models/Article.js');

//Add database
var mongoose = require('mongoose');

//Setup mongoose
mongoose.Promise = Promise;
mongoose.connect("mongodb://localhost/nytreact");
var database = mongoose.connection;

// Show any mongoose errors
database.on("error", function(error) {
	console.log("Connection failed: ", error);
});

// Once logged in to the db through mongoose, log a success message
database.once("open", function() {
	console.log("Mongoose connection success!!");
});

module.exports = function(app){
  app.get('/api/saved', function(req, res) {

    Article.find({})
    .exec(function(err, doc){

      if(err){
        console.log(err);
      }
      else {
        res.send(doc);
      }
    })
  });

  app.post('/api/saved', function(req, res){

    var newArticle = new Article({
      title: req.body.title,
      date: req.body.date,
      url: req.body.url
    });

    newArticle.save(function(err, doc){
      if(err){
        console.log(err);
        res.send(err);
      } else {
        res.json(doc);
      }
    });
  });

  app.delete('/api/saved/:id', function(req, res){

    Article.find({'_id': req.params.id}).remove()
      .exec(function(err, doc) {
        res.send(doc);
   	});
  });
};