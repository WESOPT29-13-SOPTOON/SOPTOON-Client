import React, { useState } from "react";
import styled from "styled-components";
import EpisodeImg from "./EpisodeImg";

import { applyMediaQuery } from "../../styles/mediaQuery";

const EpisodeSlider = ({ episodeList, maxEpisodeImg, maxPage, setMaxPage, sliderWidth, sliderRef }) => {
  const [selectedIndex, setSelectedIndex] = useState(10);

  const setEpisodeData = () => {
    const arr = [...episodeList];
    const rest = maxEpisodeImg - (episodeList.length % maxEpisodeImg);
    if (rest === maxEpisodeImg) {
      setMaxPage(maxPage - 1);
      return arr;
    }

    for (let i = 0; i < rest; i++) {
      arr.push({ img: "", name: "" });
    }
    return arr;
  };

  const handleEpisodeClick = (idx) => {
    setSelectedIndex(idx);
  };

  return (
    <StyledEpisodeSliderBox sliderWidth={sliderWidth}>
      <StyledEpisodeList ref={sliderRef} maxPage={maxPage} sliderWidth={sliderWidth}>
        {setEpisodeData().map((episode, idx) => (
          <EpisodeImg
            key={idx}
            episodeData={episode}
            selected={idx === selectedIndex}
            handleClick={() => handleEpisodeClick(idx)}
          />
        ))}
      </StyledEpisodeList>
    </StyledEpisodeSliderBox>
  );
};

const StyledEpisodeSliderBox = styled.div`
  width: ${({ sliderWidth }) => sliderWidth}rem;
  height: 100%;
  ${applyMediaQuery("desktop")} {
    margin-right: 4rem;
  }
  ${applyMediaQuery("tablet")} {
    margin-right: 0.4rem;
  }
  margin-left: 0.4rem;
  position: relative;
  overflow-x: hidden;
`;

const StyledEpisodeList = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  transition: transform linear 0.3s 0.3s;
  transform: translateX(-${(prop) => prop.maxPage * prop.sliderWidth}rem);
`;

export default EpisodeSlider;
