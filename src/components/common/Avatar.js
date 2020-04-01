import React from "react";
import styled from "styled-components";
import { CustomPlaceholder } from "react-placeholder-image";

const Avatar = props => {
  return (
    <AvatarStyled
      className={`${props.avatar}`}
      width={props.width}
      height={props.height}
    >
      <CustomPlaceholder width={200} height={200} />
    </AvatarStyled>
  );
};

const AvatarStyled = styled.div`
  width: ${({ width }) => (width ? width : 157)}px;
  height: ${({ height }) => (height ? height : 157)}px;
  border-radius: 50%;
  overflow: hidden;
  display: inline-block;
  img {
    width: 100%;
  }
`;
export default Avatar;
