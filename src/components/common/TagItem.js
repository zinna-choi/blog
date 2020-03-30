import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const TagItem = props => {
  return (
    <Block>
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
`;
const Tag = styled.div`
  height: 40px;
  border-radius: 25px;
  border: 1px solid #bababa;
  color: #545454;
  display: inline-flex;
  padding: 2% 5%;
  margin: 0.3rem;
`;

export default TagItem;
