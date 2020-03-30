import React from "react";
import styled from "styled-components";
import theme from "../../static/theme";

const Bedge = props => {
  return <BedgeStyled className={`${props.className}`}>Category</BedgeStyled>;
};

const BedgeStyled = styled.button`
  width: 90px;
  height: 30px;
  border-radius: 23px;
  background-color: ${theme.colors.gray1};
  border: none;
  color: #fff;
  padding: 5px 10px;
  box-sizing: content-box;
`;

export default Bedge;
