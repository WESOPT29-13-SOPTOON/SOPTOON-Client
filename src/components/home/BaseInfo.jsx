import React from "react";
import styled, { css } from "styled-components";
import Img from "../../assets/images/img_challenge_episode1@3x.png";
import { ReactComponent as StarIcon } from "../../assets/icons/full-star.svg";

const BaseInfo = ({ data, type }) => {
  const { title, author, content, starRating } = data;
  return (
    <StyledBase>
      <img src={Img} alt="" />
      <StyledLeftContent type={type}>
        <h3>{title}</h3>
        <h4>{author}</h4>
        <p>{content}</p>
        <StyledStarRating type={type}>
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <span>{starRating}</span>
        </StyledStarRating>
      </StyledLeftContent>
    </StyledBase>
  );
};

const StyledBase = styled.article`
  display: flex;
  align-items: center;
`;

const StyledLeftContent = styled.div`
  display: flex;
  flex-direction: column;
  & > h3 {
    font-size: 1.1rem;
    color: #000000;
    font-weight: bold;
  }
  & > h4 {
    font-size: 0.01rem;
    color: #737373;
  }
  & > p {
    font-size: 1rem;
    color: #737373;
  }

  ${({ type }) =>
    type === "challengeVersion"
      ? css`
          margin-left: 1rem;
          & > h4 {
            margin-top: 0.2rem;
          }
          & > p {
            margin-top: 0.6rem;
          }
        `
      : css`
          margin-left: 0.9rem;
          & > h4 {
            margin-top: 0.3rem;
          }
          & > p {
            font-size: 1.1rem;
            margin-top: 1.171rem;
          }
        `}
`;

const StyledStarRating = styled.div`
  display: flex;
  align-items: center;
  & > svg {
    width: 1.2rem;
    height: 1.2rem;
    fill: #e04537;
  }
  & > span {
    margin-left: 0.4rem;
    font-size: 1rem;
    font-weight: 800;
    color: #737373;
  }
  ${({ type }) =>
    type === "challengeVersion"
      ? css`
          margin-top: 1.8rem;
        `
      : css`
          margin-top: 1.629rem;
        `};
`;

export default BaseInfo;
