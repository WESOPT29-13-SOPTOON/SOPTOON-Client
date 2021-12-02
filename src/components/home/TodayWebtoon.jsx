import React from "react";
import styled from "styled-components";
import TodayWebtoonRight from "./TodayWebtoonRight";
import TodayWebtoonSection from "./TodayWebtoonSection";

const TodayWebtoon = () => {
  return (
    <StyledRoot>
      <StyledWrapper>
        <TodayWebtoonSection />
        <TodayWebtoonRight />
      </StyledWrapper>
    </StyledRoot>
  );
};

export default TodayWebtoon;

const StyledRoot = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
`;

const StyledWrapper = styled.div``;
