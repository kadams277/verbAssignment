// Include React
var React = require("react");

// Here we include all of the sub-components
var Search = require("./children/Search");
var Results = require("./children/Results");
var Table = require("./children/Table");


// Creating the Main component
var Main = React.createClass({

  // Note how we added in this history state variable
  getInitialState: function() {
    return { searchTerm: "", results: "", history: [], users: [] };
  },

  // The moment the page renders get the History
  componentDidMount: function() {
    fetch('/api', {                  
      headers: {        
        'content-type': 'application/json',
        'accept': 'application/json'      
      }     
    }).then((response) => response.json()).then((results) => {
      this.setState({
        users: results
      })       
    });
  },
  
  // This function allows childrens to update the parent.
  setTerm: function(term) {
    this.setState({ searchTerm: term });
  },
  // Here we render the function
  render: function() {
    for (var i = 0; i < this.state.users.length; i++){
      if (this.state.users[i].firstName === this.state.searchTerm){
        this.setState({
          results: this.state.searchTerm
        })
      } else {
        
      }
    }
    return (
      <div className="container">
        <div className="row">
          <div className="jumbotron">
            <h2 className="text-center" id="title">Admin Portal</h2>
          </div>

          <div className="col-md-6" id="searchPanel">

            <Search setTerm={this.setTerm} />

          </div>

          <div className="col-md-6" id="resultsPanel">

            <Results address={this.state.results} />

          </div>

        </div>

        <div className ="row">

          <div className="col-md-12">

            <Table history={this.state.history} />

          </div>

        </div>

      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Main;
