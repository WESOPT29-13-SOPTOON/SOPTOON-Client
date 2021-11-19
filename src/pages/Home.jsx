import React from "react";
import styled from "styled-components";
import ChallengeWebtoonBox from "../components/home/ChallengeWebtoonBox";
import PopularityGenreCartoonBox from "../components/home/PopularityGenreCartoonBox";

const Home = () => {
  return (
    <StyledHome>
      <ChallengeWebtoonBox />
      <PopularityGenreCartoonBox />
    </StyledHome>
  );
};

const StyledHome = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export default Home;
