// Include React
var React = require("react");

import { DropdownButton, MenuItem } from 'react-bootstrap';

// Creating the Results component
var Results = React.createClass({

  // Here we render the function
  render: function() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title text-center">User</h3>
        </div>
        <div className="panel-body text-center" id="panelRight">
          <p id="userName">Kaitlyn Adams | Austin</p>

            <DropdownButton bsStyle={"primary".toLowerCase()} title={"Add To"} id={`dropdown-basic-${0}`} className="add">
              <MenuItem eventKey="1">IT</MenuItem>
              <MenuItem eventKey="2">Sales</MenuItem>
              <MenuItem eventKey="3">Support</MenuItem>
            </DropdownButton>
          
          

          {/*<p>{this.props.address}</p>*/}
        </div>
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Results;
