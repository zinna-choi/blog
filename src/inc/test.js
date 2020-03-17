import React, { Component } from "react";
import queryString from "query-string";

class test extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    const qry = queryString.parse(this.props.location.search);

    return (
      <div>
        <h3> My name is {qry.name} </h3>
        <h3> And {qry.age} year </h3>
      </div>
    );
  }
}

export default test;
