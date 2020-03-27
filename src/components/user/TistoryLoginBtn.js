import React from "react";
import styled from "styled-components";

const TistoryLoginBtn = props => {
  const redirect_uri = "http://localhost:3000/oauth/callback";
  const tistoryLoginURL = "https://www.tistory.com/oauth/authorize";
  const response_type = "token";
  const client_id = "8d0b20b1fa5058e6df37d967f22474bf";
  const tistoryLoginUrl = `${tistoryLoginURL}?client_id=${client_id}&redirect_uri=${redirect_uri}&response_type=${response_type}&grant_type=token`;

  return (
    <h5>
      <a href={tistoryLoginUrl}>{props.children}</a>
    </h5>
  );
};

export default TistoryLoginBtn;

const TextCenterView = styled.div`
  text-align: center;
`;
