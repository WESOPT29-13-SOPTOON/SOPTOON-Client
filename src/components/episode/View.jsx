import React from "react";
import styled from "styled-components";
import Screen from "../../styles/Screen";
import EpisodeSliderWrapper from "./EpisodeSliderWrapper";
import ViewHeader from "./ViewHeader";
import ViewMain from "./ViewMain";

const View = () => {
  return (
    <StyledRoot>
      <ViewHeader />
      <ViewMain />
      <Screen desktop>
        <EpisodeSliderWrapper maxEpisodeImg={5} />
      </Screen>
      <Screen tablet>
        <EpisodeSliderWrapper maxEpisodeImg={4} />
      </Screen>
      <Screen mobile>
        <EpisodeSliderWrapper maxEpisodeImg={0} />
      </Screen>
    </StyledRoot>
  );
};

const StyledRoot = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  & > * {
    width: var(--screen-width);
    margin-top: 2.4rem;
  }
`;

export default View;
