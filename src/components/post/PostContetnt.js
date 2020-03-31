import React from "react";
import styled from "styled-components";
import { CustomPlaceholder } from "react-placeholder-image";
import { PostTag } from "./index";
import TagItem from "../common/TagItem";
import Share from "../post/Share";

const PostContent = props => {
  return (
    <React.Fragment>
      <Contain>
        <Content>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa quis enim. Donec pede justo, fringilla
              vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
              imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
              mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum
              semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula,
              porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem
              ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus
              viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean
              imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper
              ultricies nisi. Nam eget dui.
            </p>
          </div>
          <div>
            <CustomPlaceholder width={800} height={400} />
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa quis enim. Donec pede justo, fringilla
              vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
              imperdiet a,
            </p>
          </div>
          <div>
            <CustomPlaceholder width={500} height={300} />
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
            </p>
          </div>
        </Content>
        <PostTag />
        <Share />
      </Contain>
    </React.Fragment>
  );
};

const Contain = styled.div`
  width: 66%;
`;

const Content = styled.div`
  div {
    width: 100%;
    margin: 1rem 0;
    overflow: hidden;
  }
  p {
    line-height: 2rem;
  }
  img {
    width: auto;
    height: auto;
    object-fit: contain;
    display: block;
    margin: 1rem auto 0px;
    max-width: 100%;
  }
`;
export default PostContent;
