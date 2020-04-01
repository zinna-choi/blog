import React from "react";
import styled from "styled-components";
import {} from "react-icons/fi";
import {
  FacebookIcon,
  KakaoIcon,
  TwitterIcon,
  PinterestIcon
} from "react-share-kakao";

const Share = props => {
  return (
    <React.Fragment>
      <Contain>
        <h3 style={{ textAlign: "center", marginBottom: "2rem" }}>
          Share this Post !
        </h3>
        <BlockStyled>
          <FacebookIcon size={40} round={true} />
          <KakaoIcon size={40} round={true} />
          <TwitterIcon size={40} round={true} />
          <PinterestIcon size={40} round={true} />
        </BlockStyled>
      </Contain>
    </React.Fragment>
  );
};

const Contain = styled.div`
  padding: 5% 35%;
  border-top: 1px solid #e2e2e2;
  border-bottom: 1px solid #e2e2e2;
  margin-top: 2rem;
`;
const BlockStyled = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 2rem;
`;

export default Share;
