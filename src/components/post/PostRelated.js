import React from "react";
import styled from "styled-components";
import Postcard from "../common/PostCard";
import theme from "../../static/theme";
import { Link } from "react-router-dom";
import { FiChevronsLeft, FiChevronsRight } from "react-icons/fi";
import media from "../../lib/styles/media";

const PostRelated = (props) => {
  return (
    <BlockStyled>
      <Link>
        <RelatedPost>
          <Post />
          <div className="hover">
            <div className="hover_tit">
              <FiChevronsLeft />
              <p>Previous</p>
            </div>
          </div>
        </RelatedPost>
      </Link>
      <Link>
        <RelatedPost>
          <Post />
          <div className="hover">
            <div className="hover_tit">
              <p> Next</p>
              <FiChevronsRight />
            </div>
          </div>
        </RelatedPost>
      </Link>
    </BlockStyled>
  );
};

const BlockStyled = styled.div`
  display: flex;
  width: 100%;
  border-top: 1px solid #e2e2e2;
  padding: 1rem 0;
  a {
    ${media.medium} {
      width: 50%;
    }
  }
  ${media.small} {
    display: block;
  }
`;
const RelatedPost = styled.div`
  position: relative;
  ${media.medium}{
   width:100%
 }
  .hover {
    width: 390px;
    height: 200px;
    border-radius: 10px;
    background-color: rgba(255, 180, 0, 0);
    position: absolute;
    top: 0;
    left: 0.39rem;
    text-align: center;
    padding: 22%;
    opacity: 0;
    z-index:999;
    ${media.medium}{
      position:inherit;
      display:none;
      
    }
    &:hover {
      opacity: 1;
      background-color: rgba(255, 180, 0, 0.9);
    }
  }
  .hover_tit {
    text-align: center;
    font-size: 2rem;
    font-weight: 500;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    vertical-align: middle;
  }
  p {
    margin-bottom: 4px;
    margin:10%:
  }
`;
const Post = styled(Postcard)`
  ${media.small} {
    width: 96%;
  }
`;

export default PostRelated;
