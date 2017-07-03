//Include models to sync table data
var Article = require('../models/Article.js');

//Add database
var mongoose = require('mongoose');

//Setup mongoose
mongoose.Promise = Promise;

// development DB
// mongoose.connect("mongodb://localhost/nytreact");

// production DB
mongoose.connect("mongodb://heroku_wqd6l73q:13a7u2jgil80s0t7pdl6f24p55@ds145292.mlab.com:45292/heroku_wqd6l73q")

var database = mongoose.connection;

// Show any mongoose errors
database.on("error", function(error) {
	console.log("Connection failed: ", error);
});

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

    Article.findByIdAndRemove(req.params.id, 
    function(error, article){
      res.send({id: article._id});
    });
  });
};