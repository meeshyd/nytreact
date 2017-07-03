// Include React
var React = require("react");

// Creating the Results component
var Results = React.createClass({
  
  handleClick: function(i) {

    var title = this.props.results[i].title;
    var url = this.props.results[i].url;
    var date = this.props.results[i].date
    console.log("handleClick: ", title, url, date)
    this.props.saveArticle(title, date, url);
  },

  render: function(){
    // a few inline styles
    var rowMargin = {
      margin: 0,
      width: '100%'
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

    var articleResult = this.props.results;

    var articleList = articleResult.map(function(article,i){
      console.log(article)
      console.log(i)
      if (articleResult.length > 2) {
        return (
          <div key={i} style={border}>
            <div className="row" style={rowMargin}>
              <div className="col-md-12">
                <h5 className="text-left">
                  <span className="label label-primary">{parseInt(i)+1}</span>
                  <a style={titleMargin} key={article._id} href={article.url} target="_blank">
                    {article.title}
                  </a>
                </h5>
                <p className="text-left">{article.date}</p>
                <p className="text-left">{article.snippet}</p>
              </div>
            </div>
            <div className="row" style={rowMargin}>
              <div className="col-md-12">
                <button style={button} onClick={()=>this.handleClick(i)} type="button" className="btn btn-success">
                  Save
                </button>
              </div>
            </div>          
          </div>
        );
      }
      else {
        return '';
      }
    }, this);


    return (

      <div className="panel-body">

        {articleList}

      </div>

    );
  }
});

// Export the component back for use in other files
module.exports = Results;
