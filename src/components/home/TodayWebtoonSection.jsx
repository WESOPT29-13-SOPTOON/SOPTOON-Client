import React from "react";
import styled from "styled-components";
import ImgSlader from "./ImgSlader";

const TodayWebtoonSection = () => {
  return (
    <div>
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
        <ImgSlader />
      </StyledTodayWebtoon>
    </div>
  );
};

export default TodayWebtoonSection;

const StyledTodayWebtoon = styled.div`
  border: 0.2rem solid #e5e5e5;
  width: 69.169rem;
  height: 33.2rem;

  & > div:nth-child(1) {
    font-size: 2.8rem;
    font-weight: bold;
    /* width: 12.8rem;
    margin: 0 auto; */

    & > strong {
      color: #60d171;
    }
  }
`;

const StyledNav = styled.div`
  font-weight: bold;
  & > button {
    border-radius: 1.35rem;
    width: 6.111rem;
    height: 2.037rem;
    border: none;
    background-color: #e8e8e8;
    margin-bottom: 1.663rem;
  }

  & > button:nth-child(2) {
    color: white;
    background-color: #60d171;
  }

  & > button:nth-child(4) {
    margin-bottom: 0;
  }
`;
