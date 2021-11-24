import React from "react";
import styled from "styled-components";
import ImgSlider from "./ImgSlider";

const TodayWebtoonSection = () => {
  return (
    <StyledRoot>
      <StyledTodayWebtoon>
        <div>
          오늘의 <strong>웹툰</strong>
        </div>
        <StyledNav>
          <button>인기순</button>
          <button>업데이트순</button>
          <button>조회순</button>
          <button>별점순</button>
        </StyledNav>
      </StyledTodayWebtoon>
      <ImgSlider />
    </StyledRoot>
  );
};

export default TodayWebtoonSection;

const StyledRoot = styled.div`
  border: 0.2rem solid #e5e5e5;
  width: 69.169rem;
  height: 33.2rem;
  display: flex;
`;

const StyledTodayWebtoon = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2.4rem 1.03rem 8.36rem 2.88rem;
  align-items: center;

  & > div:nth-child(1) {
    font-size: 2.8rem;
    font-weight: bold;
    width: 12.8rem;
    letter-spacing: -0.15rem;
    strong {
      color: #60d171;
    }
  }
`;

const StyledNav = styled.div`
  display: flex;
  flex-direction: column;

  & > button {
    border-radius: 1.35rem;
    width: 6.11rem;
    height: 2.04rem;
    border: none;
    background-color: #e8e8e8;
    margin-bottom: 1.6rem;
    font-weight: bold;
    font-size: 1rem;
    letter-spacing: -0.1rem;
  }

  & > button:nth-child(1) {
    margin-top: 6.2rem;
  }

  & > button:hover {
    color: white;
    background-color: #60d171;
  }

  & > button:nth-child(4) {
    margin-bottom: 0;
  }
`;
