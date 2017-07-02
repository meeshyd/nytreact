// Include React
var React = require("react");
var helpers = require('../utils/helpers.js');

// Creating the Results component
var Results = React.createClass({

  render: function(){
    // "arts" is an object containing the search term results (i.e. articles)
    var articleResult = this.props.results;
    var saveFunction = this.saveStory;

    // Iterate through the object containing the search results and prepare for display
    var articleList = Object.keys(articleResult).map(function(i){
      return (
        
        <div key={articleResult[i].title}>
          <a href={articleResult[i].url}>
            {articleResult[i].title}
          </a>
          <br/>
          <button onClick={saveFunction} id={articleResult[i]._id} data-title={articleResult[i].title} data-url={articleResult[i].url} data-date={articleResult[i].date} type="button" className="btn btn-muted pull-right">Save
          </button>
          <br/>
          Date: {articleResult[i].date}
          <br/>
        </div>

      ) 
    
    }); 

    return (

      <div className="panel-body">

        {articleList}

      </div>

    );
  }
});

// Export the component back for use in other files
module.exports = Results;
