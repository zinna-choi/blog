import React from "react";
import styled from "styled-components";
import PopularItem from "../common/PopularItem";
import { Link } from "react-router-dom";

const PopularList = porps => {
  return (
    <React.Fragment>
      <Link to="/">
        <PopularItem />
      </Link>
      <Link to="/">
        <PopularItem />
      </Link>
      <Link to="/">
        <PopularItem />
      </Link>
      <Link to="/">
        <PopularItem />
      </Link>
      <Link to="/">
        <PopularItem />
      </Link>
    </React.Fragment>
  );
};

export default PopularList;
