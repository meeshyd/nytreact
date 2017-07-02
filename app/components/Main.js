// Include React
var React = require("react");
var axios = require("axios");

// Here we include all of the sub-components
var Search = require("./children/Search");
var Results = require("./children/Results");
var Saved = require("./children/Saved");

// Helper for making AJAX requests to our API
var helpers = require("./utils/helpers");

// Creating the Main component
var Main = React.createClass({

  getInitialState: function(){
    return {
      term: "",
      startYear: "",
      endYear: "",
      results: [],
      savedArticles: []
    }
  },  

  saveArticle: function(title, date, url){
    helpers.postArticle(title, date, url);
    this.getArticle()
    .then(helpers.getArticle()

    .then(function(articles){
      this.setState({ saved: articles.data })
    }.bind(this)));
  },

  deleteArticle: function(article){

    helpers.deleteArticle(articleId)

    .then(helpers.getSavedArticles()

    .then(function(articles){
      this.setState({ saved: articles.data })
    }.bind(this)));

   
  },

  getArticle: function(){
    axios.get('/api/saved')
      .then(function(articles){
        this.setState({
          savedArticles: articles.data
        })
      }.bind(this));
  },

  // If the component updates we'll run this code
  componentDidUpdate: function(){

    if(this.state.runSearch === true){

      helpers.runQuery(this.state.searchCriteria).then(function(articles){
        this.setState({ articles: articles, runSearch: false });
      }.bind(this));
      console.log("componentdidmount ", this.state.searchCriteria)
    }
  },

  componentDidMount: function(){
    axios.get('/api/saved')
      .then(function(articles){
        this.setState({
          savedArticles: articles.data
        });
      }.bind(this));
  },

  setTerm: function(results){
    this.setState({ searchCriteria: results });
    this.setState({ runSearch: true });
    console.log("set term ", results)
  },

  render: function() {
    return (
      <div className='container'>
        <div className="jumbotron">
          <h1 className="text-center"><strong><i className="fa fa-newspaper-o"></i> New York Times Search</strong></h1>
        </div>

        <div className="row">
          <div className="col-sm-12">
            <div className="panel panel-primary">
              <div className="panel panel-default">
                <div className="panel-heading">
                  <h3 className="panel-title text-center">Search</h3>
                </div>
                <div className= "panel-body text-center">
                  <Search setTerm={this.setTerm} articles={this.state.results} saveArticle={this.saveArticle}/>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-12">
            <div className="panel panel-primary">
              <div className="panel panel-default">
                <div className="panel-heading">
                  <h3 className="panel-title text-center">Search Results</h3>
                </div>
                <div className= "panel-body text-center">
                  <Results results={this.state.results} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-12">
            <div className="panel panel-primary">
              <div className="panel panel-default">
                <div className="panel-heading">
                  <h3 className="panel-title text-center">Saved Articles</h3>
                </div>
                <div className= "panel-body text-center">
                  <Saved saved={this.state.savedArticles} deleteArticle={this.deleteArticle}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Main;
