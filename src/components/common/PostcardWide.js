import React from "react";
import styled from "styled-components";
import PostCard from "./PostCard";

const PostCardWide = props => {
  return (
    <PostCardWideStyled
      right={81}
      top={260}
      padding={12}
      fontSize={2}
      left={12}
    />
  );
};

const PostCardWideStyled = styled(PostCard)`
  width: 100%;
  height: 400px;
  margin: 0;
  border-radius: 0;
  margin-bottom: 2rem;
`;

export default PostCardWide;
