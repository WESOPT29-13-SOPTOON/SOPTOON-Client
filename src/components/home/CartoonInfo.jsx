import React from "react";
import styled from "styled-components";
import { ReactComponent as StarIcon } from "../../assets/icons/full-star.svg";
import { applyMediaQuery } from "../../styles/mediaQuery";
import Screen from "../../styles/Screen";

const CartoonInfo = ({ data }) => {
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
  margin-left: 0.89rem;
  ${applyMediaQuery("mobile")} {
    margin-left: 0;
  }
  & > h3 {
    font-size: 1.1rem;
    color: #000000;
    font-weight: bold;
    ${applyMediaQuery("mobile")} {
      margin-top: 1rem;
    }
  }
  & > h4 {
    font-size: 1.1rem;
    color: #737373;
    letter-spacing: -0.02em;
    margin-top: 0rem;
    ${applyMediaQuery("desktop")} {
      margin-top: 0.3rem;
    }
  }
  & > p {
    color: #737373;
    font-size: 1.1rem;
    letter-spacing: -0.05rem;
    ${applyMediaQuery("desktop")} {
      margin-top: 1.171rem;
    }
    ${applyMediaQuery("tablet")} {
      margin-top: 0.64rem;
    }
  }
`;

const StyledStarRating = styled.div`
  display: flex;
  align-items: end;
  ${applyMediaQuery("desktop")} {
    margin-top: 1.629rem;
  }
  ${applyMediaQuery("tablet")} {
    margin-top: 0.56rem;
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

export default CartoonInfo;
