import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Avatar from "../common/Avatar";
import { FiCornerDownRight } from "react-icons/fi";
import theme from "../../static/theme";

const CommentHead = props => {
  const onToggle = e => {
    e.preventDefault();
    console.log("1111");
  };
  return (
    <CommentCon>
      <div className="profile">
        <Link to="/">
          <Avatar width={70} height={70} />
        </Link>
        <div className="comment-info">
          <div className="username">
            <Link to="/">David</Link>
          </div>
          <div className="date">Mar 25 . 2020</div>
        </div>
      </div>
      <Contents>
        Ex in eu sunt quis deserunt nostrud cillum id. Irure non officia
        cupidatat laborum sint ut velit.Ex in eu sunt quis deserunt nostrud
        cillum id. Irure non officia cupidatat laborum sint ut velit. Ex in eu
        sunt quis deserunt nostrud cillum id. Irure non officia cupidatat
        laborum sint ut
      </Contents>
      <Reply onClick={onToggle}>
        <FiCornerDownRight size={15} color={theme.colors.red0} />
        Reply
      </Reply>
    </CommentCon>
  );
};
const Contents = styled.div`
  width: 60%;
  font-weight: 400;
  font-size: 0.8rem;
  line-height: 1.5rem;
  color: ${theme.colors.gray0};
`;
const CommentCon = styled.div`
  margin-bottom: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .profile {
    display: flex;
    align-items: center;
    width: 22%;
    img {
      width: 100%;
      height: auto;
      display: block;
      object-fit: cover;
    }
    .comment-info {
      margin-left: 1rem;
      line-height: 1;
      .username {
        font-size: 1rem;
        font-weight: bold;
        color: #000;
        a {
          color: inherit;
          text-decoration: none;
          &:hover {
            text-decoration: underline;
            color: #ccc;
          }
        }
      }
      .date {
        margin-top: 0.5rem;
        color: ${theme.colors.gray4};
        font-size: 0.875rem;
      }
    }
  }

  .actions {
    font-size: 0.875rem;
  }

  color: #ccc;
  span {
    cursor: pointer;
    &:hover {
      color: #ccc;
      text-decoration: underline;
    }
  }
  span + span {
    margin-left: 0.5rem;
  }
`;
const Reply = styled.div`
  cursor: pointer;
  width: 10%;
  color: ${theme.colors.red0};
`;

export default CommentHead;
