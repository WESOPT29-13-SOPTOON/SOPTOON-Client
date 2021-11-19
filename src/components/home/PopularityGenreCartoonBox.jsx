import React from "react";
import styled from "styled-components";
import PopularityGenreCartoonBase from "./PopularityGenreCartoonBase";

const genre = ["순정", "소년", "무협"];
const cartoonInfo = [
  {
    img: "../../assets/images/img_challenge_episode1@3x.png",
    title: "오늘의 후기",
    author: "chaenn417417",
    content: "매일 살아가는 후기",
    starRating: "9.79",
  },
  {
    img: "../../assets/images/img_challenge_episode1@3x.png",
    title: "오늘의 후기",
    author: "chaenn417417",
    content: "매일 살아가는 후기",
    starRating: "9.79",
  },
];

const PopularityGenreCartoonBox = () => {
  return (
    <StyledBox>
      <h2>
        장르별 <span>인기 단행본 만화</span>
      </h2>
      <div>
        {genre.map((name, idx) => (
          <PopularityGenreCartoonBase key={idx} genreName={name} data={cartoonInfo} />
        ))}
      </div>
    </StyledBox>
  );
};

const StyledBox = styled.section`
  width: var(--screen-width);
  margin-bottom: 6.5rem;
  & > h2 {
    font-size: 2.2rem;
    font-weight: 600;
    color: #000000;
    & > span {
      color: #60d071;
    }
  }

  & > div {
    width: 100%;
    height: 34.3rem;
    background-color: #f9f9fc;
    border: 0.1rem solid #e5e5e5;
    border-radius: 1.6rem;
    margin-top: 1.9rem;
    display: flex;
    & > * {
      margin-top: 3.949rem;
    }
    & > *:first-child {
      margin-top: 2.7rem;
      margin-left: 6.11rem;
    }
    & > *:last-child {
      margin-right: 6.6rem;
    }
  }
`;

export default PopularityGenreCartoonBox;
