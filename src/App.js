import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import { Route, Link, Switch } from "react-router-dom";
//import Home from './inc/home.js';//
//import Test from './inc/test.js';//
// import Head from "./inc/Head";
import { Head } from "./inc";
import UserList from "./components/user/UserList";
import { parseHash } from "./util";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      host: "",
      access_token: null
    };
  }
  componentDidMount() {
    const token = parseHash(window.location.href);
    if (!!token.access_token) {
      this.setState({
        access_token: token.access_token
      });
    }

    this._getHost();
  }

  _getHost = async () => {
    const res = await axios.get("/api/host");
    this.setState({ host: res.data.host });
  };

  render() {
    return (
      <div>
        <Head isLogin={!!this.state.access_token} />
        <UserList />
      </div>
    );
  }
}

export default App;
