import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { CustomPlaceholder } from "react-placeholder-image";
import Bedge from "./Bedge";
import theme from "../../static/theme";
import RectangleButton from "./RectangleButton";
import { ellipsis } from "../../lib/styles/utils";
import media from "../../lib/styles/media";

const PostItem = (props) => {
  return (
    <Link to="/" style={{ textDecoration: "none" }}>
      <PostItemStyled>
        <Thumbnail>
          <CustomPlaceholder width={800} height={400} />
          {/* <img src={images.logo} alt="logo image" /> */}
        </Thumbnail>
        <PostDetail>
          <BlockStyled>
            <div className="title">
              <CateButton />
              <Date>MAR 25 . 2020</Date>
            </div>
          </BlockStyled>
          <PostTitle>
            6 Programming Habits That Make You an Ineffective Programmer
          </PostTitle>
          <PostContent>
            We all have both good and bad habits. Programming habits are no
            exception to this. But once you start being aware of your bad habits
            you could change yourself for the better. If you work on breaking
            one of these bad habits in this list you will not only impact
            yourself. Most likely it ...
          </PostContent>
          <Block>
            <RectangleButton />
          </Block>
        </PostDetail>
      </PostItemStyled>
    </Link>
  );
};

const PostItemStyled = styled.div`
  margin-bottom: 2rem;
`;
const Thumbnail = styled.div`
  width: 100%;
  height: 400px;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const CateButton = styled(Bedge)`
  background-color: ${theme.colors.yellow0};
  color: #fff; */
  margin-top: 1rem; */
`;

const PostTitle = styled.h3`
  font-weight: bold;
  color: #000;
  margin-top: 1rem;
  ${ellipsis};
  line-height: 2.5em;
`;

const PostContent = styled.h5`
  color: #aeaeae;
  line-height: 2.5rem;
  margin-top: 1.5rem;
  font-weight: 400;
  height: 6em;
  ${ellipsis};
  white-space: normal;
`;

const Block = styled.div`
  text-align: center;
`;

const BlockStyled = styled.div`
  margin-top: 1rem;
  .title {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
  }
`;

const Date = styled.h4`
  color: ${theme.colors.gray2};
  font-size: 1em;
  margin-right: 10px;
  font-weight: 400;
`;

const PostDetail = styled.div`
  ${media.medium} {
    margin: 0 4%;
  }
`;
export default PostItem;
