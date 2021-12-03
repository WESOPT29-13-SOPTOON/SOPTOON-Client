import React from "react";
import styled from "styled-components";
import BaseInfoWrapper from "./BaseInfoWrapper";
import WebtoonInfo from "./WebtoonInfo";
import ChallengeWebtoonGroupHeader from "./ChallengeWebtoonGroupHeader";
import { applyMediaQuery } from "../../styles/mediaQuery";

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
    font-size: 1.2rem;
    ${applyMediaQuery("desktop")} {
      margin-right: 2.7rem;
      margin-left: 3.6rem;
    }
    ${applyMediaQuery("tablet")} {
      margin-right: 1.9rem;
      margin-left: 2.1rem;
    }
    ${applyMediaQuery("mobile")} {
      margin: 0;
    }
  }
`;

const StyledBaseInfos = styled.div`
  display: flex;
  ${applyMediaQuery("tablet")} {
    margin-left: 3.6rem;
  }
  ${applyMediaQuery("tablet")} {
    margin-left: 3.5rem;
  }
  ${applyMediaQuery("mobile")} {
    /* margin-left: 2.5rem; */
    width: 100%;
    justify-content: space-around;
  }

  & > * {
    display: flex;
    align-items: center;

    ${applyMediaQuery("desktop")} {
      margin-right: 1.4rem;
      margin-top: 2rem;
    }
    ${applyMediaQuery("tablet")} {
      margin-top: 0.9rem;
      margin-right: 1.1rem;
    }
    ${applyMediaQuery("mobile")} {
      flex-direction: column;
      align-items: center;
      margin-top: 2.8rem;
    }

    img {
      ${applyMediaQuery("desktop")} {
        width: 7.6rem;
        height: 7.6rem;
      }
      width: 6.6rem;
      height: 6.6rem;
    }
  }

  & > *:first-child {
    ${applyMediaQuery("desktop")} {
      margin-left: 9.5rem;
    }
  }

  & > *:last-child {
    margin-right: 0;
  }
`;

export default ChallengeWebtoonBase;
