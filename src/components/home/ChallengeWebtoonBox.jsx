import React from "react";
import styled from "styled-components";
import ChallengeWebtoonBase from "./ChallengeWebtoonBase";

const group = ["에피소드", "옴니버스", "스토리"];
const webtoonInfo = [
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

const ChallengeWebtoonBox = () => {
  return (
    <StyledBox>
      <h2>
        베스트도전 & 도전 <span>추천웹툰</span>
      </h2>
      <div>
        {group.map((name, idx) => (
          <ChallengeWebtoonBase key={idx} groupName={name} data={webtoonInfo} />
        ))}
      </div>
    </StyledBox>
  );
};

const StyledBox = styled.section`
  width: var(--screen-width);
  margin-bottom: 5.5rem;
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
    height: 48.5rem;
    background-color: #f9f9fc;
    border: 0.1rem solid #e5e5e5;
    border-radius: 1.6rem;
    margin-top: 1.9rem;
    & > * {
      margin-top: 3.1rem;
    }
    & > *:first-child {
      margin-top: 2.7rem;
    }
  }
`;

export default ChallengeWebtoonBox;
