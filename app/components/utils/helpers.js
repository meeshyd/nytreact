// Include the axios package for performing HTTP requests (promise based alternative to request)
var axios = require('axios');

// New York Times API
var nytAPI = "39869921ec514004b10b70efa84c6fca";

// Helper Functions
var helpers = {

  runQuery: function(term, startYear, endYear){

    //Figure out the geolocation
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + nytAPI + "&q=" + term + "&begin_date=" + startYear + "0101&end_date=" + endYear + "1231";

    return axios.get(queryURL).then(function(response){

      var allArticles = response.response.docs;
      var newArticles = [];
      var counter = 0;
      console.log(allArticles)
      //Gets first 5 articles that have all 3 components
      for(var i = 0; i < allArticles.length; i++){

        if(counter > 4) {
          return newArticles;
        }

        if(allArticles[counter].headline.main && allArticles[counter].pub_date && allArticles[counter].web_url) {
          newArticles.push(allArticles[counter]);
          counter++;
        }
      }
      console.log(newArticles)
      return newArticles;
    })
  },

  // This function posts saved articles to our database.
  postArticle: function(title, date, url){

    axios.post('/api/saved', {title: title, date: date, url: url})
    .then(function(results){
      return(results);
    })
  }
}


// We export the helpers function (which contains getGithubInfo)
module.exports = helpers;