import React from "react";
import styled from "styled-components";
import CommentsList from "./CommentsList";

const CommentsListMain = ({ view }) => {
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

  const bestCommentsInfo = [
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

  switch (view) {
    case "comment":
      return (
        <StyledMain>
          <CommentsList commentsData={commentsInfo} view={view} />
        </StyledMain>
      );
    case "bestComment":
    default:
      return (
        <StyledMain>
          <CommentsList commentsData={bestCommentsInfo} view={view} />
        </StyledMain>
      );
  }
};

export default CommentsListMain;

const StyledMain = styled.main``;
