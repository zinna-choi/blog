import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import theme from "../../static/theme";

const PostTag = porps => {
  return (
    <Block>
      <span>Tags.</span>
      <Link to="/" style={{ textDecoration: "none" }}>
        <Tag>tag1</Tag>
      </Link>
      <Link to="/" style={{ textDecoration: "none" }}>
        <Tag>tag22222222222222</Tag>
      </Link>
      <Link to="/" style={{ textDecoration: "none" }}>
        <Tag>tag333333333</Tag>
      </Link>
    </Block>
  );
};
const Block = styled.div`
  width: 100%;
  text-align: left;
  span {
    font-weight: bold;
    vertical-align: middle;
  }
`;
const Tag = styled.div`
  height: 40px;
  border-radius: 25px;
  color: ${theme.colors.gray0};
  display: inline-flex;
  padding: 1% 5%;
  margin: 0.3rem;
  background-color: ${theme.colors.gray2};
`;

export default PostTag;
