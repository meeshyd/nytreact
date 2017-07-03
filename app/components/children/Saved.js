// Include React
var React = require("react");

// This is the History component. It will be used to show a log of  recent searches.
var Saved = React.createClass({

  clickToDelete: function(res){
    this.props.deleteArticle(res);
  },

  render: function() {
    // a few inline styles
    var rowMargin = {
      margin: 0,
      width: '100%',
    };

    var button = {
      display: 'block',
      margin: '0 auto 10px auto',
    }
    
    var titleMargin = {
      paddingLeft: '10px',
    }

    var border = {
      borderBottom: '1px solid',
      marginBottom: '10px',
    }

    return (
      <div>
        {this.props.saved.map(function(res, i){
          return (
            <div className='well' key={i}>
              <a href={res.url} target='_blank'><p>{res.title}</p></a>
              <button className='btn btn-success btn-warning pull-right'
                    onClick={this.clickToDelete.bind(null, res._id)}>Delete</button>
              <p>{res.date}</p>
          
            </div>
          )
        }, this)}
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Saved;
