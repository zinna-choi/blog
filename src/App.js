import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import { Route, Link, Switch } from "react-router-dom";
//import Home from './inc/home.js';//
//import Test from './inc/test.js';//
// import Head from "./inc/Head";
import { Head } from "./inc";
import UserList from "./components/user/UserList";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      host: ""
    };
  }
  componentDidMount() {
    this._getHost();
  }
  _getHost = async () => {
    const res = await axios.get("/api/host");
    this.setState({ host: res.data.host });
  };

  render() {
    return (
      <div>
        <Head />
        <UserList />
      </div>
    );
  }
}

export default App;
