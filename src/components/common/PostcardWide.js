import React from "react";
import styled from "styled-components";
import PostCard from "./PostCard";
import media from "../../lib/styles/media";
import CateBedge from "./PostCard";

const PostCardWide = (props) => {
  return (
    <PostCardWideStyled
      right={90}
      top={260}
      padding={0.5}
      fontSize={1.5}
      left={0.5}
    />
  );
};

const PostCardWideStyled = styled(PostCard)`
  width: 100%;
  height: 400px;
  margin: 0;
  border-radius: 0;
  margin-bottom: 2rem;

  .thumb {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
  .con {
    width: 75%;
    ${media.large} {
      width: 90%;
    }
    ${media.medium} {
      width: 96%;
    }
  }
  .cate {
    position: absolute;
    right: 90%;
    ${media.medium} {
      right: 85%;
    }
    ${media.small} {
      right: 77%;
      top: -62%;
    }
    ${media.xsmall} {
      right: 67%;
    }
  }
`;

export default PostCardWide;
