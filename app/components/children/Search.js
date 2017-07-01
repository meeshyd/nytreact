// Include React
var React = require("react");

// Creating the Form component
var Search = React.createClass({

  // // Here we set a generic state associated with the text being searched for
  // getInitialState: function() {
  //   return { term: "" };
  // },

  // // This function will respond to the user input
  // handleChange: function(event) {

  //   this.setState({ term: event.target.value });

  // },

  // // When a user submits...
  // handleSubmit: function(event) {
  //   // prevent the HTML from trying to submit a form if the user hits "Enter" instead of
  //   // clicking the button
  //   event.preventDefault();

  //   // Set the parent to have the search term
  //   this.props.setTerm(this.state.term);
  //   this.setState({ term: "" });
  // },
  // Here we describe this component's render method
  render: function() {
    return (
      <div className="panel panel-primary">
        <div className="panel-heading">
          <h2 className="panel-title text-center"><strong>Search</strong></h2>
        </div>
        <div className="panel-body text-center">

            <form>
              <div className="form-group">
                <h4 className=""><strong>Topic</strong></h4>
                <input type="text" className="form-control text-center" id="topic" required/>
                <br />

                <h4 className=""><strong>Start Year</strong></h4>
                <input type="text" className="form-control text-center" id="startYear" required/>
                <br />

                <h4 className=""><strong>End Year</strong></h4>
                <input type="text" className="form-control text-center" id="endYear" required/>
                <br />
                
                <button type="button" className="btn btn-primary" >Search</button>
              </div>

            </form>
        </div>
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Search;
