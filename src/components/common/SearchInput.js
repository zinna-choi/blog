import React from "react";
import styled from "styled-components";
import theme from "../../static/theme";

const SearchInput = props => {
  return <SearchInputStyled placeholder="Search..."></SearchInputStyled>;
};

const SearchInputStyled = styled.input`
  width: 150px;
  height: 46px;
  border-radius: 23px;
  background-color: ${theme.colors.gray1};
  border: none;
  color: ${theme.colors.gray2};
  padding: 10px;
  box-sizing: border-box;
  font-size: 0.9rem;
`;

export default SearchInput;
