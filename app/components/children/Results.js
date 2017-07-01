// Include React
var React = require("react");

// Creating the Results component
var Results = React.createClass({
  // Here we render the function
  render: function() {
    return (
      <div className="panel panel-warning">
        <div className="panel-heading">
          <h3 className="panel-title text-center"><strong>Results</strong></h3>
        </div>
        <div className="panel-body">
          RESULTS DISPLAY HERE
        </div>
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Results;
