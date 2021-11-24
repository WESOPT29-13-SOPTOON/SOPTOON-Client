import React from "react";
import styled from "styled-components";
import EpisodeSlider from "./EpisodeSlider";
import ViewHeader from "./ViewHeader";
import ViewMain from "./ViewMain";

const View = () => {
  return (
    <StyledRoot>
      <ViewHeader />
      <ViewMain />
      <EpisodeSlider maxEpisodeImg={5} />
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
