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
import MobileHeader from "./MobileHeader";
import SearchIcon from "@material-ui/icons/Search";

const MobileHeaderContain = (props) => {
  return (
    <ContainStyled>
      <Container>
        <Header>
          <LeftStyled>
            <Logo>
              <Link to="/">
                {/* <img src={images.logo} alt="logo image" /> */}
                <CustomPlaceholder width={60} height={60} />
              </Link>
            </Logo>
          </LeftStyled>
          <RightStyled>
            <SearchIcon fontSize="large" />
            <MobileHeader />
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
  display: none;
  ${media.medium} {
    display: block;
  }
`;

const Header = styled.div`
  width: 100%;
  margin: 0 auto;
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  padding: 1% 0%;
  ${media.samll} {
    max-width: 100%;
  }
`;
const LeftStyled = styled.div``;
const RightStyled = styled.div`
  text-align: right;
  display: flex;
  align-items: center;
`;
export const Logo = styled.div``;
export default MobileHeaderContain;
