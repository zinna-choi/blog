import React from "react";
import styled from "styled-components";
import "../App.css";
import "../index.css";
import theme from "../static/theme";
import { CustomPlaceholder } from "react-placeholder-image";
import {} from "react-icons/fi";
import { PostCardLg, PostCard } from "../components/common/index";
import { PostList, Side } from "../components/home/index";

const Home = props => {
  return (
    <HomeLayoutStyled>
      <PopularStyled>
        <Block>
          <PostCard />
          <PostCard />
        </Block>
        <Block>
          <PostCardLg />
        </Block>
        <Block>
          <PostCard />
          <PostCard />
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
  width: 1200px;
  margin: 0 auto;
`;

const Block = styled.div`
  text-align: center;
`;

const PopularStyled = styled.div`
  grid-template-columns: 33% 33% auto;
  display: flex;
  margin-top: 0px 10px;
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

const ContetStyled = styled.div`
  grid-template-columns: 66% auto;
  overflow: hidden;
  display: flex;
`;

export default Home;
