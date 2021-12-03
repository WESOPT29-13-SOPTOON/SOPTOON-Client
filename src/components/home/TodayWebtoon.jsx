import React from "react";
import styled from "styled-components";
import Screen from "../../styles/Screen";
import TodayWebtoonRight from "./TodayWebtoonRight";
import TodayWebtoonSection from "./TodayWebtoonSection";

const TodayWebtoon = () => {
  return (
    <StyledRoot>
      <StyledWrapper>
        <Screen desktop tablet>
          <TodayWebtoonSection />
          <TodayWebtoonRight />
        </Screen>
        <Screen mobile>
          <TodayWebtoonSection />
        </Screen>
      </StyledWrapper>
    </StyledRoot>
  );
};

export default TodayWebtoon;

const StyledRoot = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledWrapper = styled.div`
  display: flex;
  width: var(--screen-width);
`;
