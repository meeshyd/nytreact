var axios = require("axios");
var APIKey = '39869921ec514004b10b70efa84c6fca';

// Exporting an object with methods for retrieving and posting data to our API

  var helpers = {

    runQuery: function(search) {
      var term = search.term;
      var startYear = search.startYear;
      var endYear = search.endYear;

      var queryURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=' + APIKey + '&q=' + term + '&begin_date=' + startYear + '0101' + '&end_date=' + endYear + '1231';
      console.log("runQuery url ", queryURL)
      var articles =[];
      return axios.get(queryURL).then(function(res){
        console.log("runQuery articles ", res.data.response.docs)
        for (var i=0; i < res.data.response.docs.length; i++) {

          articles.push({

            title: res.data.response.docs[i].headline.main,
            url: res.data.response.docs[i].web_url,
            date: res.data.response.docs[i].pub_date,
            _id: res.data.response.docs[i]._id
          
          });
        }

        return articles;
      });
    },

    saveArticle: function(article) {
        return axios.post("/api/saved", article)
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