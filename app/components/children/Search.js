// Include React
var React = require("react");

// Creating the Form component
var Search = React.createClass({

  getInitialState: function(){
    return{
      'term': "",
      'startYear': "",
      'endYear': "",
      'articles':[]
    }
  },

  handleSubmit: function(){
    // Prevent default form submission
    // event.preventDefault();

    // Create object to hold search data
    var newSearch = {};
    newSearch.term = this.state.term;
    newSearch.startYear = this.state.startYear;
    newSearch.endYear = this.state.endYear;

    // Call setSearch prop (leads to parent function)
    this.props.setSearch(newSearch);
    console.log(newSearch)
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
  

  render: function(){
    return(
      
      <form>
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
          <button onClick={this.handleSubmit}>
            Search
          </button>
      </form>
                
    )
  }
});

// Export the component back for use in other files
module.exports = Search;
