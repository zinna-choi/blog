import React from "react";
import styled from "styled-components";
import PopularItem from "../common/PopularItem";
import { Link } from "react-router-dom";

const PopularList = porps => {
  return (
    <React.Fragment>
      <Link>
        <PopularItem />
      </Link>
      <Link>
        <PopularItem />
      </Link>
      <Link>
        <PopularItem />
      </Link>
      <Link>
        <PopularItem />
      </Link>
      <Link>
        <PopularItem />
      </Link>
    </React.Fragment>
  );
};

export default PopularList;
