import React from "react";
import styled from "styled-components";
import PostItem from "../common/PostItem";

const PostList = props => {
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
`;

export default PostList;
