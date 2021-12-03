import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router";
import { applyMediaQuery } from "../../../styles/mediaQuery";

const Card = ({ webtoon }) => {
  const { image, title, episode, writer } = webtoon;

  const navigate = useNavigate();

  return (
    <StyledRoot onClick={() => navigate("/episode")}>
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
  &:hover {
    cursor: pointer;
  }

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

  ${applyMediaQuery("tablet")} {
    width: 138px;
    height: 187px;
    img {
      width: 138px;
      height: 138px;
    }
    .title {
      margin-top: 8px;
    }
    .episode,
    .writer {
      margin-top: 1px;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }
  }
  ${applyMediaQuery("mobile")} {
    width: 90px;
    height: 142px;
    margin-top: 26px;
    img {
      width: 90px;
      height: 90px;
    }
    .title {
      margin-top: 8px;
      font-size: 12px;
    }
    .episode,
    .writer {
      margin-top: 3px;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      font-size: 10px;
    }
  }
`;

export default Card;
