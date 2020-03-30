import React from "react";
import styled from "styled-components";
import PostCard from "./PostCard";

const PostCardLg = props => {
  return <PostCardLgStyled />;
};

const PostCardLgStyled = styled(PostCard)`
  height: 410px;
`;

export default PostCardLg;
