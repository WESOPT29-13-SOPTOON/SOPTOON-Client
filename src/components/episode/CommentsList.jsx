import React from "react";
import styled from "styled-components";
import BestComment from "./BestComment";
import cleanBot from "../../assets/images/img_cleanbot.png";
import check from "../../assets/icons/ic_check.png";
import bestIcon from "../../assets/icons/ic_bestcomment.png";

const CommentsList = () => {
  const commentsInfo = [
    {
      img: { bestIcon }, //객체는 :
      name: "유진",
      id: "haneugene",
      date: "2021-10-18",
      content:
        "하루 종일 너란 바닷속을 항해하는 나는 아쿠아맨 헤엄 헤엄 헤엄\nI&apos;m rolling in the deep inside of you\n너의 어장은 너무 캄캄해",
    },
    {
      img: { bestIcon }, //객체는 :
      name: "유진",
      id: "haneugene",
      date: "2021-10-18",
      content:
        "하루 종일 너란 바닷속을 항해하는 나는 아쿠아맨 헤엄 헤엄 헤엄\nI&apos;m rolling in the deep inside of you\n너의 어장은 너무 캄캄해",
    },
    {
      img: { bestIcon }, //객체는 :
      name: "유진",
      id: "haneugene",
      date: "2021-10-18",
      content:
        "하루 종일 너란 바닷속을 항해하는 나는 아쿠아맨 헤엄 헤엄 헤엄\nI&apos;m rolling in the deep inside of you\n너의 어장은 너무 캄캄해",
    },
    {
      img: { bestIcon }, //객체는 :
      name: "유진",
      id: "haneugene",
      date: "2021-10-18",
      content:
        "하루 종일 너란 바닷속을 항해하는 나는 아쿠아맨 헤엄 헤엄 헤엄\nI&apos;m rolling in the deep inside of you\n너의 어장은 너무 캄캄해",
    },
  ];

  return (
    <StyledRoot>
      <StyledBtnWrapper>
        <button>
          <img src={check} alt="체크" />
          BEST댓글
        </button>
        <button>전체댓글</button>
      </StyledBtnWrapper>
      <StyledBox>
        <div>
          <img src={cleanBot} alt="클린봇" />
          <span>
            <strong>클린봇</strong>이 악성댓글을 감지합니다.
          </span>
        </div>
        <div>설정</div>
      </StyledBox>
      {commentsInfo.map((commentInfo) => (
        <BestComment key={commentInfo} />
      ))}
    </StyledRoot>
  );
};

export default CommentsList;

const StyledRoot = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 19.8rem;
`;

const StyledBtnWrapper = styled.div`
  font-size: 1.25rem;

  & > button {
    border: none;
    background-color: white;
    margin-top: 3.8rem;
    font-weight: bold;
  }

  & > button:nth-child(1) {
    color: #60d171;
    margin-right: 3.2rem;
    & > img {
      margin-right: 0.6rem;
      vertical-align: middle;
    }
  }
  & > button:nth-child(2) {
    color: #d2d2d2;
  }
`;

const StyledBox = styled.div`
  border: 0.1rem solid #d2d2d2;
  font-size: 1.25rem;
  border-radius: 1rem;
  margin-top: 1.7rem;
  margin-bottom: 2.4rem;
  color: #d2d2d2;
  height: 4rem;
  display: flex;
  justify-content: space-between;

  & > div:nth-child(1) {
    display: flex;
    align-items: center;

    & > img {
      margin-left: 1rem;
      margin-right: 0.5rem;
    }

    & > span {
      & > strong {
        color: #60d171;
      }
    }
  }

  & > div:nth-child(2) {
    display: flex;
    align-items: center;
    margin-right: 1.8rem;
  }
`;
