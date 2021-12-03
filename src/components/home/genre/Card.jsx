import React from "react";
import styled from "styled-components";

const Card = ({ webtoon }) => {
  const { image, title, episode, writer } = webtoon;

  return (
    <StyledRoot>
      <img src={image} alt="webtoon" />
      <p className="title">{title}</p>
      <p className="episode">{episode}</p>
      <p className="writer">{writer}</p>
    </StyledRoot>
  );
};

const StyledRoot = styled.div`
  width: 176px;
  height: 237px;

  img {
    width: 176px;
    height: 176px;
  }
  .title {
    font-size: 14px;
    font-weight: bold;
    margin-top: 11px;
  }
  .episode,
  .writer {
    font-size: 11px;
    color: #737373;
    margin-top: 4px;
  }
`;

export default Card;
