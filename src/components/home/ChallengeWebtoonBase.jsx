import React from "react";
import styled from "styled-components";
import BaseInfo from "./BaseInfo";
import ChallengeWebtoonGroupHeader from "./ChallengeWebtoonGroupHeader";

const ChallengeWebtoonBase = ({ groupName, data }) => {
  return (
    <StyledBase>
      <ChallengeWebtoonGroupHeader groupName={groupName} />
      <StyledBaseInfos>
        {data.map((data, idx) => (
          <BaseInfo key={idx} data={data} type={"challengeVersion"} />
        ))}
      </StyledBaseInfos>
    </StyledBase>
  );
};

const StyledBase = styled.div`
  /* position: relative; */
  display: flex;
  justify-content: center;
  flex-direction: column;
  & > * {
    margin-right: 2.7rem;
    margin-left: 3.6rem;
    font-size: 1.2rem;
  }
`;

const StyledBaseInfos = styled.div`
  display: flex;
  & > * {
    margin-top: 2rem;
    margin-right: 1.4rem;
    & > img {
      width: 7.6rem;
      height: 7.6rem;
    }
  }
  & > *:first-child {
    margin-left: 9.5rem;
  }
`;

export default ChallengeWebtoonBase;
