import React from "react";
import styled from "styled-components";
import theme from "../../static/theme";
import { CustomPlaceholder } from "react-placeholder-image";
import Bedge from "./Bedge";
import { ellipsis } from "../../lib/styles/utils";

const PostCard = props => {
  return (
    <PostCardStyled className={`${props.className}`} height={props.height}>
      <CustomPlaceholder width={800} height={400} />
      <Cover />
      <Content className={`${props.con}`} padding={props.padding}>
        <CateBedge
          className={`${props.cate}`}
          right={props.right}
          top={props.top}
        />
        <Title
          className={`${props.tit}`}
          fontSize={props.fontSize}
          left={props.left}
        >
          6 Programming Habits That Make You an Ineffective Programmer
        </Title>
        <Date>MAR 25 .2020</Date>
      </Content>
    </PostCardStyled>
  );
};

const PostCardStyled = styled.div`
  width: 390px;
  height: ${({ height }) => (height ? height : 200)}px;
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
  padding: ${({ padding }) => (padding ? padding : 5)}%;
`;

const Title = styled.h5`
  position: absolute;
  bottom: 40px;
  ${ellipsis};
  white-space: normal;
  line-height: 1.25em;
  left: ${({ left }) => (left ? left : 5)}%;
  font-size: ${({ fontSize }) => (fontSize ? fontSize : 1.2)}em;
`;

const Date = styled.p`
  position: absolute;
  bottom: 5px;
  font-weight: 400;
  color: #bdbdbd;
  font-size: 0.9em;
`;

const CateBedge = styled(Bedge)`
  right: ${({ right }) => (right ? right : 5)}%;
  position: absolute;
  top: ${({ top }) => (top ? top : 20)}px;
  background-color: ${theme.colors.red0};
`;

export default PostCard;
