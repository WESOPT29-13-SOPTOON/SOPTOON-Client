import React from "react";
import styled from "styled-components";
import BestComment from "./BestComment";
import cleanBot from "../../assets/images/img_cleanbot.png";
import check from "../../assets/icons/ic_check.png";
import Comment from "./Comment";

const CommentsList = () => {
  const commentsInfo = [
    {
      name: "유진",
      id: "haneugene",
      date: "2021-10-18",
      content:
        "하루 종일 너란 바닷속을 항해하는 나는 아쿠아맨 헤엄 헤엄 헤엄 Im rolling in the deep inside of you 너의 어장은 너무 캄캄해",
    },
    {
      name: "드리미",
      id: "nctDREAM",
      date: "2021-10-18",
      content:
        "궁금해 네 맘 한가운데 나는 어딘지. 표류해 모르는 채 한번 가보는 거지 막막해. 가끔 이 마음의 끝은 어딜지, 너인지",
    },
    {
      name: "자우림",
      id: "ITZY",
      date: "2021-10-18",
      content:
        "있지, 어제는 바람이 너무 좋아서 그냥 걸었어. 그땐 잊어버리고 말하지 못 한 얘기가 있어.어제는 하늘이 너무 파래서 그냥 울었어",
    },
    {
      name: "백예린",
      id: "r__yxn",
      date: "2021-10-18",
      content:
        "너와 나의 세대가 마지막이면 어떡해, 또 다른 빙하기가 찾아오면 어떡해. 긴 세월에 변하지 않을 그런 사랑은 없겠지만 그 사랑을 기다려줄 그런 사람을 찾는 거야",
    },
  ];

  const bestcommentsInfo = [
    {
      name: "유진",
      id: "haneugene",
      date: "2021-10-18",
      content:
        "하루 종일 너란 바닷속을 항해하는 나는 아쿠아맨 헤엄 헤엄 헤엄 Im rolling in the deep inside of you 너의 어장은 너무 캄캄해",
    },
    {
      name: "드리미",
      id: "nctDREAM",
      date: "2021-10-18",
      content:
        "궁금해 네 맘 한가운데 나는 어딘지. 표류해 모르는 채 한번 가보는 거지 막막해. 가끔 이 마음의 끝은 어딜지, 너인지",
    },
    {
      name: "자우림",
      id: "ITZY",
      date: "2021-10-18",
      content:
        "있지, 어제는 바람이 너무 좋아서 그냥 걸었어. 그땐 잊어버리고 말하지 못 한 얘기가 있어.어제는 하늘이 너무 파래서 그냥 울었어",
    },
    {
      name: "백예린",
      id: "r__yxn",
      date: "2021-10-18",
      content:
        "너와 나의 세대가 마지막이면 어떡해, 또 다른 빙하기가 찾아오면 어떡해. 긴 세월에 변하지 않을 그런 사랑은 없겠지만 그 사랑을 기다려줄 그런 사람을 찾는 거야",
    },
  ];

  return (
    <StyledRoot>
      <StyledWrapper>
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
        {bestcommentsInfo.map((bestcommentsInfo) => (
          <BestComment key={bestcommentsInfo} bestComment={bestcommentsInfo} />
        ))}
        {commentsInfo.map((commentsInfo) => (
          <Comment key={commentsInfo} comment={commentsInfo} />
        ))}
      </StyledWrapper>
    </StyledRoot>
  );
};

export default CommentsList;

const StyledRoot = styled.div`
  /* display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100vw; */
`;

const StyledWrapper = styled.div`
  flex-direction: column;
  padding-right: 19.8rem;
`;

const StyledBtnWrapper = styled.div`
  font-size: 1.25rem;

  button {
    border: none;
    background-color: white;
    margin-top: 3.8rem;
    font-weight: bold;
  }

  button:nth-child(1) {
    color: #60d171;
    margin-right: 3.2rem;
    & > img {
      margin-right: 0.6rem;
      vertical-align: middle;
    }
  }

  button:nth-child(2) {
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

  div:nth-child(1) {
    display: flex;
    align-items: center;

    & > img {
      margin-left: 1rem;
      margin-right: 0.5rem;
    }

    & > span {
      strong {
        color: #60d171;
      }
    }
  }

  div:nth-child(2) {
    display: flex;
    align-items: center;
    margin-right: 1.8rem;
  }
`;
