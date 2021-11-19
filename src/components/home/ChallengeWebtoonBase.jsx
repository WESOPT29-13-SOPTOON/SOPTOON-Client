import React from "react";
import styled from "styled-components";
import BaseInfoWrapper from "./BaseInfoWrapper";
import WebtoonInfo from "./WebtoonInfo";
import ChallengeWebtoonGroupHeader from "./ChallengeWebtoonGroupHeader";

const ChallengeWebtoonBase = ({ groupName, data }) => {
  return (
    <StyledRoot>
      <ChallengeWebtoonGroupHeader groupName={groupName} />
      <StyledBaseInfos>
        {data.map((data, idx) => (
          <BaseInfoWrapper key={idx} data={data}>
            <WebtoonInfo data={data} />
          </BaseInfoWrapper>
        ))}
      </StyledBaseInfos>
    </StyledRoot>
  );
};

const StyledRoot = styled.div`
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
    display: flex;
    align-items: center;
    margin-top: 2rem;
    margin-right: 1.4rem;
    img {
      width: 7.6rem;
      height: 7.6rem;
    }
  }
  & > *:first-child {
    margin-left: 9.5rem;
  }
`;

export default ChallengeWebtoonBase;
