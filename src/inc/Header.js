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
import media from "../lib/styles/media";
import Container from "@material-ui/core/Container";
import SearchBar from "../components/common/SearchBar";

const Head = (props) => {
  return (
    <ContainStyled>
      <Container>
        <Header>
          <Logo>
            <Link to="/">
              {/* <img src={images.logo} alt="logo image" /> */}
              <CustomPlaceholder width={60} height={60} />
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
            {/* <SearchInput /> */}
            <SearchBar />
            <div class="con">
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
              <Login title={"LOGIN"} />
            </div>
          </RightStyled>
        </Header>
      </Container>
    </ContainStyled>
  );
};
const ContainStyled = styled.div`
  position: fixed;
  background-color: #fff;
  width: 100%;
  z-index: 100;
  width: 100%;
  z-index: 100;
  top: 0;
  left: 0;
  box-shadow: 1px 1px 9px 0px rgba(0, 0, 0, 0.2);

  ${media.medium} {
    display: none;
  }
`;

const Header = styled.div`
  width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 10% 45% auto;
  text-align: center;
  padding: 1%;
  align-items: center;
  ${media.samll} {
    max-width: 100%;
  }
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
  .con {
    margin-top: 2%;
  }
`;

const Login = styled(RoundButton)`
  background-color: #fff;
  color: ${theme.colors.red0};
  border: 1px solid ${theme.colors.red0};
  border-radius: 4px;
  box-shadow: 10px 10px 2px 1px rgba(234, 84, 85, 0.7);
`;
export const Logo = styled.div``;

export default Head;
