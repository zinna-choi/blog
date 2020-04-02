import React, { useState } from "react";
import "./App.css";
import axios from "axios";
import { Route, Link, Switch } from "react-router-dom";
import { Home, Head, Page } from "./inc";
import { parseHash } from "./util";
import GlobalStyles from "./GlobalStyles";
import styled from "styled-components";

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
      <Block>
        <Switch>
          <Route path="/page" component={Page} />
          <Route exact path="/" component={Home} />
        </Switch>
      </Block>
      <GlobalStyles />
    </React.Fragment>
  );
};

const Block = styled.div`
  margin-top: 80px;
`;
export default App;
