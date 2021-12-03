import React from "react";
import styled from "styled-components";
import { applyMediaQuery } from "../../styles/mediaQuery";
import ImgSlider from "./ImgSlider";

const TodayWebtoonSection = () => {
  return (
    <StyledRoot>
      <StyledWrapper>
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
      </StyledWrapper>
    </StyledRoot>
  );
};

export default TodayWebtoonSection;

const StyledRoot = styled.div`
  border: 0.2rem solid #e5e5e5;
  margin-top: 26px;
`;

const StyledWrapper = styled.div`
  display: flex;
  ${applyMediaQuery("desktop")} {
    width: 69.169rem;
    height: 33.2rem;
  }
  ${applyMediaQuery("tablet")} {
    width: 53.226rem;
    height: 33.2rem;
  }
  ${applyMediaQuery("mobile")} {
    width: var(--screen-width);
    display: flex;
    flex-direction: column;
  }
`;

const StyledTodayWebtoon = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2.4rem 1.03rem 8.36rem 2.88rem;
  align-items: center;

  ${applyMediaQuery("mobile")} {
    margin-top: 1.304rem;
    margin-bottom: 2.189rem;
  }

  & > div:nth-child(1) {
    font-size: 2.8rem;
    font-weight: bold;
    width: 12.8rem;
    letter-spacing: -0.15rem;
    strong {
      color: #60d171;
    }
    ${applyMediaQuery("mobile")} {
      font-size: 2rem;
      width: 8.756rem;
    }
  }
`;

const StyledNav = styled.div`
  display: flex;
  flex-direction: column;

  ${applyMediaQuery("mobile")} {
    display: flex;
    flex-direction: row;
  }

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

    ${applyMediaQuery("mobile")} {
      margin-top: 1.485rem;
      margin-right: 0.5rem;
    }
  }

  & > button:nth-child(1) {
    margin-top: 6.2rem;

    ${applyMediaQuery("mobile")} {
      margin-top: 1.485rem;
    }
  }

  & > button:nth-child(2) {
    color: white;
    background-color: #60d171;
  }

  & > button:nth-child(4) {
    margin-bottom: 0;
  }
`;
