import React from "react";
import Screen from "../styles/Screen";
import styled from "styled-components";
import { applyMediaQuery } from "../styles/mediaQuery";
import ChallengeWebtoonBox from "../components/home/ChallengeWebtoonBox";
import PopularityGenreCartoonBox from "../components/home/PopularityGenreCartoonBox";

const Home = () => {
  return (
    <StyledRoot>
      <Screen desktop tablet>
        <p>home desktop and tablet</p>
      </Screen>
      <Screen mobile>
        <p>home mobile</p>
      </Screen>
      <ChallengeWebtoonBox />
      <PopularityGenreCartoonBox />
    </StyledRoot>
  );
};

const StyledRoot = styled.div`
  ${applyMediaQuery("desktop")} {
    width: var(--screen-width); // 이렇게 전역변수 사용 가능!
    height: 30rem; // 컴포넌트에서는 rem 사용 완전 가능!
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
    width: 100%; // 모바일은 화면 꽉차게? 아니면 고정?
    height: 10rem;
    background-color: skyblue;
  }
`;

export default Home;
