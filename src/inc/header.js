import React, { Component } from "react";
import { Route, Link, Switch } from "react-router";
import "../App.css";

class header extends Component {
  render() {
    return (
      <div class="header_grid">
        <div></div>
        <div className="acenter">
          <Route path="/" />
          <Link className="link_tit" to="/">
            {" "}
            <h3>Jieun's Blog!</h3>
          </Link>
        </div>
        <div className="acenter">
          <h5> 관리자 로그인</h5>
        </div>
      </div>
    );
  }
}
