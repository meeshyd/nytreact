// Include React
var React = require("react");
var helpers = require('../utils/helpers.js');

// Creating the Results component
var Results = React.createClass({
  
  render: function() {
    return (
      <div>
        {this.props.results.map(function(search, i){
          return(
            <div id= "resultDiv" key={i}>
              <h3>{search.headline}</h3>
              <p>{search.blurb}</p>
              <a href={search.url}><button type="button" className="btn btn-success">View on New York Times</button></a>
              <button type="button" className="btn btn-info" onClick={helpers.postArticle(search.headline, search.url)}>Save Article</button>
            </div>
          );
        })}
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Results;
