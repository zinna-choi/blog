import React from "react";
import styled from "styled-components";
import Button from "./Button";
import TextareaAutosize from "react-textarea-autosize";
import theme from "../../static/theme";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import media from "../../lib/styles/media";

const CommentWrite = (props) => {
  return (
    <PostCommentsWriteBlock>
      <StyledTextarea placeholder="Write a your Comment" />
      <div className="writeinfo">
        <div>
          <input className="c_user" type="text" placeholder="Name" />
          <input className="c_user" type="password" placeholder="Password" />
        </div>
        <div className="checkbox-contain">
          <FormControlLabel
            control={<Checkbox name="checked" color="default" />}
            label="secret"
          />
          <button className="btn_post" type="submit">
            Post Comment
          </button>
        </div>
      </div>
    </PostCommentsWriteBlock>
  );
};

const PostCommentsWriteBlock = styled.div`
  .buttons-wrapper {
    display: flex;
    justify-content: flex-end;
  }
  .writeinfo {
    display: flex;
    justify-content: space-between;
    align-items: center;
    vertical-align: middle;
    ${media.small} {
      display: block;
    }
  }
  .c_user {
    padding: 8px;
    margin-right: 10px;
    border: 1px solid ${theme.colors.gray4};
    border-radius: 3px;
    ${media.small} {
      width: 100%;
    }
  }
  .btn_post {
    border: none;
    border-bottom: 3px solid transparent;
    background: transparent;
    color: ${theme.colors.yellow0};
    font-weight: bold;
    font-size: 1.2rem;
    line-height: 1rem;
    &:hover {
      border-bottom: 2px solid ${theme.colors.yellow0};
    }
  }
  .MuiFormControlLabel-root {
    margin: 0;
    margin-right: 1rem;
    label {
      color: #ccc;
    }
  }
  .checkbox-contain {
    ${media.small} {
      text-align: right;
    }
  }
`;
const StyledTextarea = styled(TextareaAutosize)`
  resize: none;
  padding: 1rem;
  padding-bottom: 1.5rem;
  outline: none;
  border: 1px solid ${theme.colors.gray4};
  margin-bottom: 0.5rem;
  width: 100%;
  border-radius: 4px;
  min-height: 6.125rem;
  font-size: 1rem;
  color: ${theme.colors.gray4};
  &::placeholder {
    color: ${theme.colors.gray4};
  }
  line-height: 1.75;
`;

export default CommentWrite;
