import React from "react";
import styled from "styled-components";
import Img from "../../assets/images/episodeImg13.png";

const EpisodeImg = ({ episodeData, selected, handleClick }) => {
  return (
    <StyledRoot onClick={handleClick}>
      <StyledEpisode>
        {episodeData.name === "" ? <></> : <img src={Img} alt="" />}
        <span>{episodeData.name}</span>
      </StyledEpisode>
      <StyledLine />
      {selected ? <StyledSelectBox /> : <></>}
    </StyledRoot>
  );
};

const StyledRoot = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  float: left;
  width: 100%;
  height: 100%;
  cursor: pointer;
`;

const StyledEpisode = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 14.7rem;
  img {
    width: 12.4rem;
    height: 8rem;
  }
  span {
    font-size: 1.25rem;
    margin-top: 1rem;
  }
`;

const StyledLine = styled.span`
  /* position: absolute; */
  height: 4.4rem;
  width: 0.1rem;
  margin-bottom: 2rem;
  background-color: #e5e5e5;
`;

const StyledSelectBox = styled.div`
  position: absolute;
  left: 0.35rem;
  top: 1.8rem;
  width: 14rem;
  height: 12.8rem;
  border: 0.4rem solid #ffb800;
`;

export default EpisodeImg;
