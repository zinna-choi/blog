import React from "react";
import styled from "styled-components";
import theme from "../../static/theme";

const RoundButton = props => {
  return <RoundButtonStyled>기본버튼</RoundButtonStyled>;
};

const RoundButtonStyled = styled.button`
  width: 150px;
  height: 46px;
  border-radius: 23px;
  background-color: ${theme.colors.gray1};
  border: none;
  color: ${theme.colors.gray0};
`;

export default RoundButton;
