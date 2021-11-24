import React from "react";
import styled from "styled-components";
import TodayWebtoonRight from "./TodayWebtoonRight";
import TodayWebtoonSection from "./TodayWebtoonSection";

const TodayWebtoon = () => {
  return (
    <StyledRoot>
      <TodayWebtoonSection />
      <TodayWebtoonRight />
    </StyledRoot>
  );
};

export default TodayWebtoon;

const StyledRoot = styled.div`
  display: flex;
  justify-content: center;

  & > * {
    width: var(--screen-width);
  }
`;
