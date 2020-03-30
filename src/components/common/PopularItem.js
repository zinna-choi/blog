import React from "react";
import styled from "styled-components";
import { CustomPlaceholder } from "react-placeholder-image";
import theme from "../../static/theme";

const PopularItem = props => {
  return (
    <BlockStyled>
      <Block>
        <Thumbnail>
          <CustomPlaceholder width={100} height={100} />
        </Thumbnail>
      </Block>
      <ContentStyled>
        <Title>
          6 Programming Habits That Make You an Ineffective Programmer
        </Title>
        <Date>MAR 15 .2020</Date>
      </ContentStyled>
    </BlockStyled>
  );
};
const BlockStyled = styled.div`
  margin-bottom: 1rem;
  height: auto;
  display: inline-block;
`;
const Block = styled.div`
  width: 30%;
  float: left;
`;
const Thumbnail = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 5px;
  overflow: hidden;
  img {
    width: 100%;
  }
`;

const ContentStyled = styled.div`
  width: 70%;
  float: right;
  text-align: left;
`;

const Title = styled.h5`
  color: ${theme.colors.gray0};
`;

const Date = styled.p`
  color: ${theme.colors.gray3};
`;

export default PopularItem;
