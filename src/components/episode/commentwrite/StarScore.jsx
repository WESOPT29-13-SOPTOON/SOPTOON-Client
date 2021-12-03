import React, { useState } from "react";
import { star1, star2, star3, star4, star5, star6, star7, star8, star9, star10 } from "../../../assets/icons/star";
import styled from "styled-components";

const StarScore = () => {
  const [score, setScore] = useState(star10);
  const [showOption, setShowOption] = useState(false);

  const starList = [star1, star2, star3, star4, star5, star6, star7, star8, star9, star10];

  const handleOpenClick = () => {
    setShowOption(true);
  };

  const handleScoreClick = (star) => {
    setScore(star);
    setShowOption(false);
  };

  return (
    <StyledRoot>
      <p>별점 주기</p>
      <img className="score" src={score} onClick={handleOpenClick} alt="star" />
      <button>확인</button>
      {showOption && (
        <ul>
          {starList.map((star, index) => (
            <li key={index}>
              <img src={star} onClick={() => handleScoreClick(star)} alt={`star${index}`} />
            </li>
          ))}
        </ul>
      )}
    </StyledRoot>
  );
};

const StyledRoot = styled.div`
  width: var(--screen-width);
  height: 90px;
  display: flex;
  align-items: center;
  padding-left: 20px;
  margin: 0 auto;
  p {
    font-size: 20px;
    font-weight: bold;
  }
  .score {
    margin: 13px;
    &:hover {
      cursor: pointer;
    }
  }
  button {
    border: none;
    font-size: 10px;
    font-weight: bold;
    background-color: #f9f9fc;
    width: 34px;
    height: 20px;
    border-radius: 10px;
  }
  ul {
    background-color: white;
    padding: 3px 6px;
    border-radius: 4px;
    position: relative;
    left: -165px;
    top: 150px;
    &:hover {
      cursor: pointer;
    }
  }
  li {
    padding: 3px 0;
  }
`;

export default StarScore;
