import React from "react";
import styled from "styled-components";
import { applyMediaQuery } from "../../styles/mediaQuery";
import Screen from "../../styles/Screen";
import ChallengeWebtoonBase from "./ChallengeWebtoonBase";

const group = ["에피소드", "옴니버스", "스토리"];
const webtoonInfo = [
  {
    img: "../../assets/images/img_paperback1@3x.png",
    title: "오늘의 후기",
    author: "chaenn417",
    content: "매일 살아가는 후기",
    starRating: "9.79",
  },
  {
    img: "../../assets/images/img_paperback1@3x.png",
    title: "오늘의 후기",
    author: "chaenn417",
    content: "매일 살아가는 후기",
    starRating: "9.79",
  },
  {
    img: "../../assets/images/img_paperback1@3x.png",
    title: "오늘의 후기",
    author: "chaenn417",
    content: "매일 살아가는 후기",
    starRating: "9.79",
  },
  {
    img: "../../assets/images/img_paperback1@3x.png",
    title: "오늘의 후기",
    author: "chaenn417",
    content: "매일 살아가는 후기",
    starRating: "9.79",
  },
];

const mobileWebtoonInfo = [
  {
    img: "../../assets/images/img_paperback1@3x.png",
    title: "오늘의 후기",
    author: "chaenn417",
    content: "매일 살아가는 후기",
    starRating: "9.79",
  },
  {
    img: "../../assets/images/img_paperback1@3x.png",
    title: "오늘의 후기",
    author: "chaenn417",
    content: "매일 살아가는 후기",
    starRating: "9.79",
  },
  {
    img: "../../assets/images/img_paperback1@3x.png",
    title: "오늘의 후기",
    author: "chaenn417",
    content: "매일 살아가는 후기",
    starRating: "9.79",
  },
];

const ChallengeWebtoonBox = () => {
  return (
    <StyledRoot>
      <h2>
        베스트도전 & 도전 <span>추천웹툰</span>
      </h2>
      <StyledBaseWrapper>
        <Screen desktop tablet>
          {group.map((name, idx) => (
            <ChallengeWebtoonBase key={idx} groupName={name} data={webtoonInfo} />
          ))}
        </Screen>
        <Screen mobile>
          {group.map((name, idx) => (
            <ChallengeWebtoonBase key={idx} groupName={name} data={mobileWebtoonInfo} />
          ))}
        </Screen>
      </StyledBaseWrapper>
    </StyledRoot>
  );
};

const StyledRoot = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${applyMediaQuery("desktop")} {
    margin-bottom: 5.5rem;
  }
  ${applyMediaQuery("tablet")} {
    margin-bottom: 4.32rem;
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

  ${applyMediaQuery("desktop")} {
    height: 48.5rem;
    margin-top: 1.9rem;
    & > * {
      margin-top: 3.1rem;
    }
    & > *:first-child {
      margin-top: 2.7rem;
    }
  }
  ${applyMediaQuery("tablet")} {
    height: 38.2rem;
    margin-top: 1.48rem;
    & > * {
      margin-top: 1.6rem;
    }
    & > *:first-child {
      margin-top: 1.9rem;
    }
  }
  ${applyMediaQuery("mobile")} {
    height: 54.6rem;
    margin-top: 2.5rem;
    & > * {
      margin-top: 2.6rem;
    }
    & > *:first-child {
      margin-top: 3.5rem;
    }
  }
`;

export default ChallengeWebtoonBox;
