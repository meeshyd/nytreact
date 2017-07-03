// Include React
var React = require("react");
var helpers = require("../utils/helpers");

var Search = React.createClass({

  getInitialState: function(){
    return{
      'term': "",
      'startYear': "",
      'endYear': ""
    }
  },

  handleTermChange: function(event){
    this.setState({ term: event.target.value });
  },

  handleStYrChange: function(event){
    this.setState({ startYear: event.target.value });
  },

  handleEndYrChange: function(event){
    this.setState({ endYear: event.target.value });
  },

  handleSubmit: function(event) {

    event.preventDefault();
    var searchObject = {};
    searchObject.term = this.state.term;
    searchObject.startYear = this.state.startYear;
    searchObject.endYear = this.state.endYear;

    this.props.setTerm(searchObject);
    // console.log(searchObject)
  },
  

  render: function(){
    return(
      
      <form onSubmit={this.handleSubmit}>
          <div className="form-group text-left">
            <label>Search Term: </label>
            <input type="text" value={this.state.term} className="form-control" onChange={this.handleTermChange} required />
          </div>
          <div className="form-group text-left">
            <label>Start Year: </label>
            <input type="text" value={this.state.startYear} className="form-control" onChange={this.handleStYrChange} required />
          </div>
          <div className="form-group text-left">
            <label>End Year: </label>
            <input type="text" value={this.state.endYear} className="form-control" onChange={this.handleEndYrChange} required />
          </div>
          <button className="btn">
            Search
          </button>
      </form>        
    )
  }
});

// Export the component back for use in other files
module.exports = Search;
