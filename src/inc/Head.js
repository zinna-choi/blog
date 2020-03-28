import React, { Component } from "react";
import { Route, Link, Switch, NavLink } from "react-router-dom";
import "../App.css";
import "../index.css";
import theme from "../static/theme";
import styled from "styled-components";
import Modal from "react-awesome-modal";
import TistoryLoginBtn from "../components/user/TistoryLoginBtn";
import "bootstrap/dist/css/bootstrap.css";
import { CustomPlaceholder } from "react-placeholder-image";
import { FiMail, FiGithub, FiBookmark, FiSearch } from "react-icons/fi";
import RoundButton from "../components/common/RoundButton";
import SearchInput from "../components/common/SearchInput";

const Head = props => {
  return (
    <ContainStyled>
      <Header>
        <Logo>
          <Link href="/">
            <a>
              {/* <img src={images.logo} alt="logo image" /> */}
              <CustomPlaceholder width={60} height={60} />
            </a>
          </Link>
        </Logo>
        <LeftStyled>
          <Block>
            <NavLink
              to="/"
              activeClassName="active"
              isActive={(match, location) => {
                return ["/"].indexOf(location.pathname) !== -1;
              }}
            >
              HOME
            </NavLink>
            <NavLink to="/category1" activeClassName="active">
              CATEGORY1
            </NavLink>
            <NavLink to="/category2" activeClassName="active">
              CATEGORY2
            </NavLink>
            <NavLink to="/category3" activeClassName="active">
              CATEGORY3
            </NavLink>
            <NavLink to="/Contact" activeClassName="active">
              CONTACT
            </NavLink>
          </Block>
        </LeftStyled>
        <RightStyled>
          <FiMail
            size={20}
            style={{ marginRight: 10, marginLeft: 10 }}
            color={theme.colors.gray0}
          />
          <FiGithub
            size={20}
            style={{ marginRight: 10, marginLeft: 10 }}
            color={theme.colors.gray0}
          />
          <FiBookmark
            size={20}
            style={{ marginRight: 10, marginLeft: 10 }}
            color={theme.colors.gray0}
          />
          <SearchInput></SearchInput>
        </RightStyled>
      </Header>
    </ContainStyled>
  );
};
const ContainStyled = styled.div`
  border-bottom: solid 1px #757575;
`;

const Header = styled.div`
  width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 10% 45% auto;

  text-align: center;
  padding: 10px;
  align-items: baseline;
`;

const LeftStyled = styled.div`
  display: flex;
  vertical-align: middle;
`;
const Block = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  a {
    width: 20%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    text-decoration: none;
    height: 3rem;
    color: #000;

    &.active {
      font-weight: bold;
      color: ${theme.colors.red0};
    }
  }
`;

const RightStyled = styled.div`
  text-align: right;
`;
export const Logo = styled.div``;

export default Head;
