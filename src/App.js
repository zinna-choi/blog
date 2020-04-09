import React, { useState } from "react";
import "./App.css";
import axios from "axios";
import { Route, Link, Switch } from "react-router-dom";
import { Home, Header, Page } from "./inc";
import { parseHash } from "./util";
import GlobalStyles from "./GlobalStyles";
import styled from "styled-components";
import MobileHeaderContain from "./inc/MobileHeaderContain";
import media from "./lib/styles/media";

const App = (props) => {
  const [access_token, setAccess_token] = useState(null);

  const token = parseHash(window.location.href);

  if (!!token.access_token) {
    setAccess_token({
      access_token: token.access_token,
    });
  }

  return (
    <React.Fragment>
      <Header isLogin={!!access_token} />
      <MobileHeaderContain />
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
  margin-top: 7rem;
  ${media.mediun} {
    margin-top: 6rem;
  }
  ${media.small} {
    margin-top: 5rem;
  }
`;

export default App;
