import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import theme from "../../static/theme";
import CommentHead from "../common/CommentHead";
import CommentWrite from "../common/CommentWrite";
import media from "../../lib/styles/media";

const PostComments = (props) => {
  return (
    <CommentLayout>
      <CommentCounting>
        <p>
          <span>3</span> Comments
        </p>
      </CommentCounting>
      <MarginTop />
      <CommentList>
        <li>
          <CommentHead />
          <ReplyArea>
            <li>
              <CommentHead />
            </li>
          </ReplyArea>
        </li>
        <li>
          <CommentHead />
        </li>
      </CommentList>
      <p>Leave a Comment</p>
      <CommentWrite />
    </CommentLayout>
  );
};
const CommentLayout = styled.div`
  padding: 2rem 0;
  p {
    font-weight: bold;
  }
`;
const CommentCounting = styled.div`
  span {
    color: ${theme.colors.red0};
    font-weight: bold;
    font-size: 1.4rem;
  }
`;
const CommentList = styled.ul``;
const MarginTop = styled.div`
  margin-top: 2rem;
`;
const ReplyArea = styled.ul`
  padding-left: 3%;
  ${media.small} {
    padding-left: 5%;
  }
`;

export default PostComments;
