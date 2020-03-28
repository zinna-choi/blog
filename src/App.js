import React, { useState } from "react";
import "./App.css";
import axios from "axios";
import { Route, Link, Switch } from "react-router-dom";
import Home from "./inc/home.js";
import Head from "./inc/Head";
import { parseHash } from "./util";
import GlobalStyles from "./GlobalStyles";

const App = props => {
  const [access_token, setAccess_token] = useState(null);

  const token = parseHash(window.location.href);

  if (!!token.access_token) {
    setAccess_token({
      access_token: token.access_token
    });
  }

  return (
    <React.Fragment>
      <Head isLogin={!!access_token} />
      {/* <Home /> */}
      <GlobalStyles />
    </React.Fragment>
  );
};

export default App;
