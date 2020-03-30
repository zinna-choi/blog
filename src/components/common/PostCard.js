import React from "react";
import styled from "styled-components";
import theme from "../../static/theme";

const PostCard = props => {
  return <PostCardStyled className={`${props.className}`} />;
};

const PostCardStyled = styled.div`
  width: 390px;
  height: 200px;
  border-radius: 10px;
  background-color: ${theme.colors.gray1};
  margin: 10px 5px;
`;

export default PostCard;
