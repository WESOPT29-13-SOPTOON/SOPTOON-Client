import React from "react";
import styled from "styled-components";
import TodayWebtoon from "../components/home/TodayWebtoon";

const Home = () => {
  return (
    <StyledRoot>
      <TodayWebtoon />
    </StyledRoot>
  );
};

export default Home;

const StyledRoot = styled.div`
  /* display: flex;
  justify-content: center; */

  /* & > * {
    width: var(--screen-width);
  } */
`;
