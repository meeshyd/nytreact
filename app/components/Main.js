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
      saved: []
    }
  },  

  saveArticle: function(title, date, url){
    helpers.saveArticle(title, date, url)
    .then(function(res){
      this.setState({ 
        title: title,
        url: url,
        date: date
      })
    }.bind(this));
  },

  deleteArticle: function(article){

    helpers.deleteArticle(article)

    .then(helpers.getSaved()

    .then(function(articles){
      this.setState({ saved: articles.data })
    }.bind(this)));

   
  },

  getSaved: function(){
    helpers.getSaved(title, date, url).then(function(response) {
      this.setState({
        title: title,
        date: date,
        url: url
      });
    }.bind(this));
  },

  // If the component updates we'll run this code
  componentDidUpdate: function(prevProps, prevState){

    if (prevState.searchTerm !== this.state.term) {

      let startYear = "";
      let endYear = "";

      helpers.runQuery(this.state.term, this.state.startYear, this.state.endYear).then(function(data) {

        this.setState({ results: data });

      }.bind(this));
    }
  },

  componentDidMount: function(){
    axios.get('/api/saved')
      .then(function(articles){
        this.setState({
          saved: articles.data
        });
      }.bind(this));
  },

  // setTerm: function(results){
  //   this.setState({ searchCriteria: results });
  //   this.setState({ runSearch: true });
  //   console.log("set term ", results)
  // },

  setTerm: function(term) {
    this.setState({ term: term });
  },

  // Function to set search start date
  setStartYr: function(startYear) {
    this.setState({ startYear: startYear });
  },

  // Function to set search end date
  setEndYr: function(endYear) {
    this.setState({ endYear: endYear });
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
                  <Search setTerm={this.setTerm} setStart={this.setStartYr} setEnd={this.setEndYr} />
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
                  <Results results={this.state.results} saveArticle={this.saveArticle} />
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
                  <Saved saved={this.state.saved} deleteArticle={this.deleteArticle}/>
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
