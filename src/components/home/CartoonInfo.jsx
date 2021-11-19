import React from "react";
import styled from "styled-components";
import { ReactComponent as StarIcon } from "../../assets/icons/full-star.svg";

const CartoonInfo = ({ data }) => {
  const { title, author, content, starRating } = data;
  return (
    <StyledRoot>
      <h3>{title}</h3>
      <h4>{author}</h4>
      <p>{content}</p>
      <StyledStarRating>
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <span>{starRating}</span>
      </StyledStarRating>
    </StyledRoot>
  );
};

const StyledRoot = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
  & > h3 {
    font-size: 1.1rem;
    color: #000000;
    font-weight: bold;
  }
  & > h4 {
    font-size: 1.1rem;
    color: #737373;
    margin-top: 0.3rem;
  }
  & > p {
    color: #737373;
    font-size: 1.1rem;
    margin-top: 1.171rem;
  }
`;

const StyledStarRating = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1.629rem;

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
`;

export default CartoonInfo;
