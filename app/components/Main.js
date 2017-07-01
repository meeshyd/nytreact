// Include React
var React = require("react");

// Here we include all of the sub-components
var Search = require("./children/Search");
var Results = require("./children/Results");
var Saved = require("./children/Saved");

// Helper for making AJAX requests to our API
var helpers = require("./utils/helpers");

// Creating the Main component
var Main = React.createClass({

  // getInitialState: function() {
  //   // return { searchTerm: "", results: "", history: [] };
  // },

  // // The moment the page renders get the Articles
  // componentDidMount: function() {
  //   // // Get the latest history.
  //   // helpers.getHistory().then(function(response) {
  //   //   console.log(response);
  //   //   if (response !== this.state.history) {
  //   //     console.log("History", response.data);
  //   //     this.setState({ history: response.data });
  //   //   }
  //   // }.bind(this));
  // },

  // // If the component changes (i.e. if a search is entered)...
  // componentDidUpdate: function() {

  //   // Run the query for the address
  //   helpers.runQuery(this.state.searchTerm).then(function(data) {
  //     if (data !== this.state.results) {
  //       console.log("Address", data);
  //       this.setState({ results: data });

  //       // After we've received the result... then post the search term to our history.
  //       helpers.postHistory(this.state.searchTerm).then(function() {
  //         console.log("Updated!");

  //         // After we've done the post... then get the updated history
  //         helpers.getHistory().then(function(response) {
  //           console.log("Current History", response.data);

  //           console.log("History", response.data);

  //           this.setState({ history: response.data });

  //         }.bind(this));
  //       }.bind(this));
  //     }
  //   }.bind(this));
  // },
  // // This function allows childrens to update the parent.
  // setTerm: function(term) {
  //   this.setState({ searchTerm: term });
  // },
  // Here we render the function
  render: function() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='jumbotron'>
            <h2 className='text-center'>NYT Article Search</h2>
            <p className='text-center'>stuff and stuff</p>
          </div>
        </div>

        <div className='row'>
          <div className='col-sm-10 col-sm-offset-1'>
            
          </div>
        </div>

        <div className='row'>
          <div className='col-sm-10 col-sm-offset-1'>
            
          </div>
        </div>
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Main;
