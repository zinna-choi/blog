import React from "react";
import styled from "styled-components";

const Button = props => {
  return (
    <ButtonStyled
      className={`${props.className}`}
      width={props.width}
      height={props.height}
      background={props.background}
    >
      기본버튼
    </ButtonStyled>
  );
};

const ButtonStyled = styled.div`
  width: ${({ width }) => (width ? width : 100)}px;
  height: ${({ height }) => (height ? height : 50)}px;
  border-radius: 10px;
  background-color: #ccc;
  color: #fff;
  text-align: center;
  line-height: 1.5rem;
`;
export default Button;
