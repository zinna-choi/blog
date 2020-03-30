import React from "react";
import styled from "styled-components";
import { CustomPlaceholder } from "react-placeholder-image";

const Avatar = props => {
  return (
    <AvatarStyled>
      <CustomPlaceholder width={200} height={200} />
    </AvatarStyled>
  );
};

const AvatarStyled = styled.div`
  width: 157px;
  height: 157px;
  border-radius: 50%;
  overflow: hidden;
  display: inline-block;
  img {
    width: 100%;
  }
`;
export default Avatar;
