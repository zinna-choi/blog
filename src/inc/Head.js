import React, { Component } from "react";
import { Route, Link, Switch } from "react-router-dom";
import "../App.css";
import "../index.css";
import styled from "styled-components";
import Modal from "react-awesome-modal";
import TistoryLoginBtn from "../components/user/TistoryLoginBtn";
import "bootstrap/dist/css/bootstrap.css";
import { CustomPlaceholder } from "react-placeholder-image";

const Head = props => {
  return (
    <Header>
      <Logo>
        <Link href="/">
          <a>
            {/* <img src={images.logo} alt="logo image" /> */}
            <CustomPlaceholder width={50} height={50} />
          </a>
        </Link>
      </Logo>
      {!props.isLogin ? (
        <TistoryLoginBtn>관리자 로그인</TistoryLoginBtn>
      ) : (
        <h3>로그아웃</h3>
      )}
    </Header>
  );
};

const Header = styled.div`
  display: grid;
  grid-template-columns: 33% 33% auto;
  border-bottom: solid 1px #ababab;
`;

export const Logo = styled.h1`
  img {
    height: 24px;
  }
`;

export default Head;
