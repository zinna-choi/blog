import React from "react";
import styled from "styled-components";
import theme from "../../static/theme";
import { CustomPlaceholder } from "react-placeholder-image";
import Bedge from "./Bedge";

const PostCard = props => {
  return (
    <PostCardStyled className={`${props.className}`}>
      <CustomPlaceholder width={400} height={200} />
      <Cover />
      <Content>
        <CateBedge />
        <Title>
          6 Programming Habits That Make You an Ineffective Programmer
        </Title>
        <Date>MAR 25 .2020</Date>
      </Content>
    </PostCardStyled>
  );
};

const PostCardStyled = styled.div`
  width: 390px;
  height: 200px;
  border-radius: 10px;
  background-color: ${theme.colors.gray1};
  margin: 10px 5px;
  overflow: hidden;
  position: relative;
  img {
    width: 100%;
    height: 100%;
  }
`;
const Cover = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: linear-gradient(
    180.21deg,
    rgba(0, 0, 0, 0) 34.49%,
    rgba(222, 222, 222, 0) 34.49%,
    rgba(255, 255, 255, 0) 34.49%,
    rgba(255, 255, 255, 0) 34.5%,
    rgba(72, 72, 72, 0) 34.51%,
    #5e5b5b 99.66%
  );
`;
const Content = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  color: #fff;
  text-align: left;
  padding: 5%;
`;

const Title = styled.h5`
  position: absolute;
  bottom: 40px;
`;

const Date = styled.p`
  position: absolute;
  bottom: 5px;
  font-weight: 400;
  color: #bdbdbd;
`;

const CateBedge = styled(Bedge)`
  position: absolute;
  right: 10px;
  background-color: ${theme.colors.red0};
`;

export default PostCard;
