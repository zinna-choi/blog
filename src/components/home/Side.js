import React from "react";
import styled from "styled-components";
import Avatar from "../common/Avatar";
import { FiMail, FiGithub, FiBookmark } from "react-icons/fi";
import theme from "../../static/theme";
import PopularList from "./PopularList";
import TagList from "./TagList";

const Side = props => {
  return (
    <React.Fragment>
      <Block>
        <Title>AUTHOR</Title>
        <Avatar />
        <h5 style={{ marginTop: "1rem" }}>JIEUN CHOI</h5>
        <p style={{ color: "#c1c1c1" }}>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus.
        </p>
        <BlockStyled>
          <CircleButton>
            <FiMail size={20} color={theme.colors.gray3} />
          </CircleButton>
          <CircleButton>
            <FiGithub size={20} color={theme.colors.gray3} />
          </CircleButton>
          <CircleButton>
            <FiBookmark size={20} color={theme.colors.gray3} />
          </CircleButton>
        </BlockStyled>
        <Title>Popular Posts</Title>
        <PopularList />
        <Title>Tags</Title>
        <TagList />
      </Block>
    </React.Fragment>
  );
};

const Block = styled.div`
  width: 34%;
  flex: auto;
  text-align: center;
  margin: 0 auto;
  padding: 10px;
`;

const Title = styled.h2`
  border-bottom: 1px solid #d6d6d6;
  padding: 20px;
  margin-bottom: 30px;
`;

const BlockStyled = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
`;

const CircleButton = styled.button`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #fff;
  border: 1px solid #ccc;
  margin: 1rem;
  padding-top: -10px;
  line-height: 1rem;
`;

export default Side;
