import React from "react";
import styled from "styled-components";
import { applyMediaQuery } from "../styles/mediaQuery";
import TodayWebtoon from "../components/home/TodayWebtoon";

const Home = () => {
  return (
    <StyledRoot>
      <TodayWebtoon />
    </StyledRoot>
  );
};

const StyledRoot = styled.div`
  /* ${applyMediaQuery("desktop")} {
    width: var(--screen-width); 
    height: 30rem; 
    background-color: pink;
    margin: 0 auto;
  }
  ${applyMediaQuery("tablet")} {
    width: var(--screen-width);
    height: 20rem;
    background-color: yellow;
    margin: 0 auto;
  }
  ${applyMediaQuery("mobile")} {
    width: 100%; 
    height: 10rem;
    background-color: skyblue;
  } */
`;

export default Home;
