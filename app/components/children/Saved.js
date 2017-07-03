// Include React
var React = require("react");

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
            <div key={i} style={border}>
              <div className="row" style={rowMargin}>
                <div className="col-md-12">
                  <h5 className="text-left">
                    <span className="label label-primary">{parseInt(i)+1}</span>
                    <a style={titleMargin} href={res.url} target='_blank'>{res.title}</a>
                  </h5>
                  <p className="text-left">{res.date}</p>
                </div>
              </div>
              <div className="row" style={rowMargin}>
                <div className="col-md-12">
                  <button style={button} className='btn btn-warning pull-right'
                  onClick={this.clickToDelete.bind(null,res._id)}>Delete</button>
                </div>
              </div>
            </div>

          )
        }, this)}
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Saved;
