var axios = require("axios");
var APIKey = '39869921ec514004b10b70efa84c6fca';

  var helpers = {

    runQuery: function(search) {
      var term = search.term;
      var startYear = search.startYear;
      var endYear = search.endYear;

      var queryURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=' + APIKey + '&q=' + term + '&begin_date=' + startYear + '0101' + '&end_date=' + endYear + '1231';
      // console.log("runQuery url ", queryURL)
      var articles =[];
      return axios.get(queryURL).then(function(res){
        // console.log("runQuery articles ", res.data.response.docs)
        for (var i=0; i < 5; i++) {

          articles.push({

            title: res.data.response.docs[i].headline.main,
            url: res.data.response.docs[i].web_url,
            date: res.data.response.docs[i].pub_date,
            snippet: res.data.response.docs[i].snippet,
            _id: res.data.response.docs[i]._id
          
          });
        }

        return articles;
      });
    },

    saveArticle: function(title,date,url) {
      return axios.post('/api/saved/', {
        title: title,
        date: date,
        url: url
      })
    },

    getSaved: function() {
        return axios.get("/api/saved/")
    },

    deleteArticle: function(res) {
      // console.log('deleteArticle helper ', res)
      return axios.delete("/api/saved/" + res)
    }
  };


// We export the helpers function (which contains getGithubInfo)
module.exports = helpers;