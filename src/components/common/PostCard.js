import React from "react";
import styled from "styled-components";
import theme from "../../static/theme";
import { CustomPlaceholder } from "react-placeholder-image";
import Bedge from "./Bedge";
import { ellipsis } from "../../lib/styles/utils";
import media from "../../lib/styles/media";

const PostCard = (props) => {
  return (
    <PostCardStyled className={`${props.className}`} height={props.height}>
      <div className="thumb">
        <CustomPlaceholder width={800} height={400} />
        <Cover />
      </div>
      <div className="con">
        <Content className={`${props.con}`} padding={props.padding}>
          <div className="cate">
            <CateBedge
              className={`${props.cate}`}
              right={props.right}
              top={props.top}
            />
          </div>
          <Title
            className={`${props.tit}`}
            fontSize={props.fontSize}
            left={props.left}
          >
            6 Programming Habits That Make You an Ineffective Programmer
          </Title>
          <Date>MAR 25 .2020</Date>
        </Content>
      </div>
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
  .thumb {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
  .con {
    width: 100%;
    margin: 0 auto;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    position: relative;
    z-index: 10;
  }
  ${media.medium} {
    width: 100%;
    height: 200px;
  }
  ${media.small} {
    width: 100%;
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
  z-index: 100;
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

export const CateBedge = styled(Bedge)`
  right: ${({ right }) => (right ? right : 5)}%;
  position: absolute;
  top: ${({ top }) => (top ? top : 20)}px;
  background-color: ${theme.colors.red0};
`;

export default PostCard;
