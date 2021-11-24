import React from "react";
import styled from "styled-components";
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
  width: var(--screen-width);
  margin-bottom: 6.5rem;
  & > h2 {
    margin-left: 2rem;
    font-size: 2.2rem;
    font-weight: 600;
    color: #000000;
    & > span {
      color: #60d071;
    }
  }
`;

const StyledBaseWrapper = styled.div`
  width: 100%;
  height: 34.3rem;
  background-color: #f9f9fc;
  border: 0.1rem solid #e5e5e5;
  border-radius: 1.6rem;
  margin-top: 1.9rem;
  display: flex;
  & > * {
    margin-top: 3.949rem;
    margin-right: 6.479rem;
  }
  & > *:first-child {
    margin-top: 3.949rem;
    margin-left: 6.11rem;
  }
  & > *:last-child {
    margin-right: 6.6rem;
  }
`;

export default PopularityGenreCartoonBox;
