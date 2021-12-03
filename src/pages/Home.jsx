import React from "react";
import styled from "styled-components";
import { applyMediaQuery } from "../styles/mediaQuery";
import ChallengeWebtoonBox from "../components/home/ChallengeWebtoonBox";
import PopularityGenreCartoonBox from "../components/home/PopularityGenreCartoonBox";
import TodayWebtoon from "../components/home/TodayWebtoon";
import GenreWebtoon from "../components/home/GenreWebtoon";

const Home = () => {
  return (
    <StyledRoot>
      <TodayWebtoon />
      <GenreWebtoon />
      <ChallengeWebtoonBox />
      <PopularityGenreCartoonBox />
    </StyledRoot>
  );
};

const StyledRoot = styled.div`
  ${applyMediaQuery("desktop")} {
    width: var(--screen-width); // 이렇게 전역변수 사용 가능!
    margin: 0 auto;
  }
  ${applyMediaQuery("tablet")} {
    width: var(--screen-width);
    margin: 0 auto;
  }
  ${applyMediaQuery("mobile")} {
    width: 100%;
`;

export default Home;
