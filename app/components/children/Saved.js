// Include React
var React = require("react");

// This is the History component. It will be used to show a log of  recent searches.
var Saved = React.createClass({

  clickToDelete: function(result){
    this.props.deleteArticle(result);
  },

  render: function() {
    return (
      <div>
        {this.props.saved.map(function(search, i){
          return (
            <div className='well' key={i}>
              <a href={search.url} target='_blank'><h3>{search.title}</h3></a>
              <p>{search.date}</p>
              <button className='btn btn-success btn-warning'
                    onClick={this.clickToDelete.bind(null, article._id)}>Delete</button>
            </div>
          )
        }, this)}
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Saved;
