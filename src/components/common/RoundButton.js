import React from "react";
import styled from "styled-components";
import theme from "../../static/theme";

const RoundButton = (props) => {
  return (
    <RoundStyled className={`${props.className}`}>{props.title}</RoundStyled>
  );
};

const RoundStyled = styled.button`
  width: 90px;
  height: 22px;
  border-radius: 23px;
  background-color: ${theme.colors.gray1};
  border: none;
  color: #fff;
  padding: 9px 15px;
  box-sizing: content-box;
`;

export default RoundButton;
