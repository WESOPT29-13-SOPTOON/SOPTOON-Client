import React from "react";
import styled from "styled-components";
import { ReactComponent as StarIcon } from "../../assets/icons/full-star.svg";
import { applyMediaQuery } from "../../styles/mediaQuery";
import Screen from "../../styles/Screen";

const WebtoonInfo = ({ data }) => {
  const { title, author, content, starRating } = data;
  return (
    <StyledRoot>
      <h3>{title}</h3>
      <h4>{author}</h4>
      <Screen desktop tablet>
        <p>{content}</p>
        <StyledStarRating>
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <span>{starRating}</span>
        </StyledStarRating>
      </Screen>
    </StyledRoot>
  );
};

const StyledRoot = styled.div`
  display: flex;
  flex-direction: column;
  ${applyMediaQuery("desktop")} {
    margin-left: 1rem;
  }
  ${applyMediaQuery("tablet")} {
    margin-left: 0.8rem;
  }
  & > h3 {
    font-size: 1.1rem;
    color: #000000;
    font-weight: bold;
  }
  & > h4 {
    font-size: 0.01rem;
    color: #737373;
    letter-spacing: -12em;
    ${applyMediaQuery("desktop")} {
      margin-top: 0.2rem;
    }
    ${applyMediaQuery("tablet")} {
    }
  }
  & > p {
    font-size: 1rem;
    color: #737373;
    ${applyMediaQuery("desktop")} {
      margin-top: 0.6rem;
    }
    ${applyMediaQuery("tablet")} {
      margin-top: 0.3rem;
    }
  }

  ${applyMediaQuery("mobile")} {
    align-items: center;
    & > *:nth-child(1) {
      margin-top: 1rem;
    }
    & > *:nth-child(2) {
      margin-top: 0.3rem;
    }
  }
`;

const StyledStarRating = styled.div`
  display: flex;
  align-items: end;
  ${applyMediaQuery("desktop")} {
    margin-top: 1.8rem;
  }
  ${applyMediaQuery("tablet")} {
    margin-top: 1.3rem;
  }

  & > svg {
    ${applyMediaQuery("desktop")} {
      width: 1.2rem;
      height: 1.2rem;
    }
    ${applyMediaQuery("tablet")} {
      width: 1.03rem;
      height: 1.03rem;
    }
    fill: #e04537;
  }
  & > span {
    margin-left: 0.4rem;
    font-size: 1rem;
    font-weight: 800;
    color: #737373;
  }
`;

export default WebtoonInfo;
