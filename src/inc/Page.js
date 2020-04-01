import React from "react";
import styled from "styled-components";
import { Route, Link, Switch, NavLink } from "react-router-dom";
import "../App.css";
import "../index.css";
import theme from "../static/theme";
import { CustomPlaceholder } from "react-placeholder-image";
import { FiMail, FiGithub, FiBookmark, FiSearch } from "react-icons/fi";
import { PostList, Side } from "../components/home";
import { PostCard } from "../components/common";
import PostCardWide from "../components/common/PostcardWide";
import PostContent from "../components/post/PostContetnt";

const Page = porps => {
  return (
    <LayoutStyled>
      <Block>
        <PostCardWide />
      </Block>
      <BlockStyled>
        <ContetStyled>
          <PostContent />
          <Side />
        </ContetStyled>
      </BlockStyled>
    </LayoutStyled>
  );
};

const LayoutStyled = styled.div`
  width: 100%;
`;

const ContetStyled = styled.div`
  grid-template-columns: 66% auto;
  overflow: hidden;
  display: flex;
`;
const Block = styled.div``;
const BlockStyled = styled.div`
  width: 1200px;
  margin: 0 auto;
`;

const MainImage = styled.div`
  width: 100%;
  height: 400px;
  overflow: hidden;
  margin-bottom: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 100%;
    height: auto;
  }
`;

export default Page;
