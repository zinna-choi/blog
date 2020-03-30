import React from "react";
import styled from "styled-components";
import theme from "../../static/theme";

const RectangleButton = props => {
  return <RectangleButtonStyled>READ MORE</RectangleButtonStyled>;
};

const RectangleButtonStyled = styled.button`
  width: 120px;
  height: 30px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  border: none;
  background-color: #fff;
  padding: 10px;
  box-sizing: content-box;
  margin: 10px;
  font-size: 1rem;
  &:hover {
    background-color: #000;
    color: #fff;
  }
`;

export default RectangleButton;
