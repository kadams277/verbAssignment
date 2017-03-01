// Include React
var React = require("react");

import { DropdownButton, MenuItem } from 'react-bootstrap';

// This is the History component. It will be used to show a log of  recent searches.
var Table = React.createClass({

  // Here we describe this component's render method
  render: function() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading text-center">
          <h3 className="panel-title" id="groupTitle">Groups</h3>
          <DropdownButton bsStyle={"primary".toLowerCase()} title={"Filter"} id={`dropdown-basic-${0}`} id="filter">
              <MenuItem eventKey="1">IT</MenuItem>
              <MenuItem eventKey="2">Sales</MenuItem>
              <MenuItem eventKey="3">Support</MenuItem>
          </DropdownButton>
        </div>
        <div className="panel-body text-center">
          <table className="table table-striped table-hover text-center" id="table">
            <thead>
              <tr>
                <th></th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Region</th>
                <th>Group</th>
              </tr>
            </thead>
            <tbody>
              <tr className="info">
                <td>1</td>
                <td>Jerome</td>
                <td>Salinger</td>
                <td>New York</td>
                <td>Sales</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Harper</td>
                <td>Lee</td>
                <td>Alabama</td>
                <td>Support</td>
              </tr>
              <tr className="info">
                <td>3</td>
                <td>Jeannette</td>
                <td>Walls</td>
                <td>Arizona</td>
                <td>IT</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Stephen</td>
                <td>King</td>
                <td>Maine</td>
                <td>Support</td>
              </tr>
              <tr className="info">
                <td>5</td>
                <td>Agatha</td>
                <td>Christie</td>
                <td>England</td>
                <td>Sales</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Table;
