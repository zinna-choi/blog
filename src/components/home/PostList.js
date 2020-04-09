import React from "react";
import styled from "styled-components";
import PostItem from "../common/PostItem";
import media from "../../lib/styles/media";

const PostList = (props) => {
  return (
    <PostListStyled>
      <PostItem />
      <PostItem />
      <PostItem />
      <PostItem />
    </PostListStyled>
  );
};

const PostListStyled = styled.div`
  width: 66%;
  ${media.medium} {
    width: 100%;
  }
`;

export default PostList;
