import React from "react";
import styled from "styled-components";
import "../App.css";
import "../index.css";
import theme from "../static/theme";
import { CustomPlaceholder } from "react-placeholder-image";
import {} from "react-icons/fi";
import { PostCard } from "../components/common/index";
import { PostList, Side } from "../components/home/index";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import media from "../lib/styles/media";

const Home = (props) => {
  return (
    <HomeLayoutStyled>
      <PopularStyled>
        <Block>
          <Link to="/page">
            <PostCard />
          </Link>
          <Link to="/page">
            <PostCard />
          </Link>
        </Block>
        <Block>
          <Link to="/page">
            <PostCard height={410} />
          </Link>
        </Block>
        <Block>
          <Link to="/page">
            <PostCard />
          </Link>
          <Link to="/page">
            <PostCard />
          </Link>
        </Block>
      </PopularStyled>
      <ContetStyled>
        <PostList />
        <Side />
      </ContetStyled>
    </HomeLayoutStyled>
  );
};

const HomeLayoutStyled = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Block = styled.div`
  text-align: center;
  ${media.medium} {
    width: 100%;
    margin: 0 2%;
  }
`;

const PopularStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 0px 10px;
  ${media.xsmall} {
    max-width: 100%;
  }
`;

const ContetStyled = styled.div`
  grid-template-columns: 66% auto;
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 2rem;
  ${media.medium} {
  }
`;

export default Home;
