import React from "react";
import styled from "styled-components";

const CircleButton = props => {
  return <CircleStyled></CircleStyled>;
};

const CircleStyled = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #fff;
  border: 1px solid #ccc;
`;

export default CircleButton;
