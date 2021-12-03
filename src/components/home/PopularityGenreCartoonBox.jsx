import React from "react";
import styled from "styled-components";
import { applyMediaQuery } from "../../styles/mediaQuery";
import PopularityGenreCartoonBase from "./PopularityGenreCartoonBase";

const genre = ["순정", "소년", "무협"];
const cartoonInfo = [
  {
    img: "../../assets/images/img_paperback1@3x.png",
    title: "터치터치 그대",
    author: "손팡",
    content: "네이버 웹소설 화제의 인기작 <터치터치 그...",
    starRating: "9.8",
  },
  {
    img: "../../assets/images/img_paperback1@3x.png",
    title: "터치터치 그대",
    author: "손팡",
    content: "네이버 웹소설 화제의 인기작 <터치터치 그...",
    starRating: "9.8",
  },
];

const PopularityGenreCartoonBox = () => {
  return (
    <StyledRoot>
      <h2>
        장르별 <span>인기 단행본 만화</span>
      </h2>
      <StyledBaseWrapper>
        {genre.map((name, idx) => (
          <PopularityGenreCartoonBase key={idx} genreName={name} data={cartoonInfo} />
        ))}
      </StyledBaseWrapper>
    </StyledRoot>
  );
};

const StyledRoot = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  ${applyMediaQuery("desktop")} {
    margin-bottom: 6.5rem;
  }
  ${applyMediaQuery("tablet")} {
    margin-bottom: 9.2rem;
  }
  ${applyMediaQuery("mobile")} {
    margin-bottom: 9.36rem;
  }

  & > * {
    width: var(--screen-width);
  }

  & > h2 {
    padding-left: 2rem;
    font-size: 2.2rem;
    font-weight: 600;
    color: #000000;
    & > span {
      color: #60d071;
    }
  }
`;

const StyledBaseWrapper = styled.div`
  background-color: #f9f9fc;
  border: 0.1rem solid #e5e5e5;
  border-radius: 1.6rem;
  display: flex;
  ${applyMediaQuery("desktop")} {
    margin-top: 2.7rem;
    height: 34.3rem;
  }
  ${applyMediaQuery("tablet")} {
    margin-top: 2.1rem;
    height: 27rem;
  }
  ${applyMediaQuery("mobile")} {
    margin-top: 2.5rem;
    height: 35rem;
    justify-content: space-around;
  }

  & > * {
    ${applyMediaQuery("desktop")} {
      margin-top: 3.949rem;
      margin-right: 6.479rem;
    }
    ${applyMediaQuery("tablet")} {
      margin-top: 3.1rem;
      margin-right: 3rem;
    }
    ${applyMediaQuery("mobile")} {
      margin-top: 2.7rem;
    }
  }
  & > *:first-child {
    ${applyMediaQuery("desktop")} {
      margin-left: 6.11rem;
    }
    ${applyMediaQuery("tablet")} {
      margin-left: 4.9rem;
    }
  }
`;

export default PopularityGenreCartoonBox;
