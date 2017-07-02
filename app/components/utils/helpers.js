var axios = require("axios");
var APIKey = '39869921ec514004b10b70efa84c6fca';

// Exporting an object with methods for retrieving and posting data to our API

  var helpers = {

    runQuery: function(params) {
      var term = params.term;
      var startYear = params.startYear;
      var endYear = params.endYear;
      var APIKey = '39869921ec514004b10b70efa84c6fca';

      var queryURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=' + APIKey + '&q=' + term + '&begin_date=' + startYear + '0101' + '&end_date=' + endYear + '1231';
      console.log("runquery url ", queryURL)
      return axios.get(queryURL).then(function(articles){
        console.log("runquery articles ", articles.data.response.docs)
        if(articles.data.response.docs[0]){
          
          return (articles.data.response.docs);
        }

        return [];
      });
    },

    saveArticle: function(article) {
        return axios.post("/api/saved", {article})
    },

    getSaved: function() {
        return axios.get("/api/saved")
    },

    deleteArticle: function(article) {
        return axios.delete("/api/saved/" + article._id)
    }
  };


// We export the helpers function (which contains getGithubInfo)
module.exports = helpers;