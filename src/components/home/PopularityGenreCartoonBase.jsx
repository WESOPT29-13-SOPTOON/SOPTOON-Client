import React from "react";
import styled from "styled-components";
import BaseInfoWrapper from "./BaseInfoWrapper";
import CartoonInfo from "./CartoonInfo";
import { ReactComponent as ViewmoreIcon } from "../../assets/icons/ic_viewmore@3x.svg";
import { applyMediaQuery } from "../../styles/mediaQuery";

const PopularityGenreCartoonBase = ({ genreName, data }) => {
  return (
    <StyledRoot>
      <StyledHeader>
        <span>{genreName}</span>
        <ViewmoreIcon />
      </StyledHeader>
      <StyledBaseInfos>
        {data.map((data, idx) => (
          <BaseInfoWrapper key={idx} data={data} type={"popularityCartoonVersion"}>
            <CartoonInfo data={data} />
          </BaseInfoWrapper>
        ))}
      </StyledBaseInfos>
    </StyledRoot>
  );
};

const StyledRoot = styled.div`
  display: flex;
  flex-direction: column;

  & > * {
    font-size: 1.2rem;
  }
`;

const StyledHeader = styled.div`
  font-weight: 800;
  font-size: 1.2rem;
  color: #737373;
  & > span {
    margin-right: 0.678rem;
  }
  & > svg {
    fill: #f9f9fc;
  }
`;

const StyledBaseInfos = styled.div`
  display: flex;
  flex-direction: column;
  & > * {
    display: flex;
    align-items: center;
    ${applyMediaQuery("mobile")} {
      flex-direction: column;
    }

    img {
      width: 6.3rem;
      height: 7.8rem;
      ${applyMediaQuery("desktop")} {
        width: 8.1rem;
        height: 9.9rem;
      }
    }
  }
  ${applyMediaQuery("desktop")} {
    & > *:first-child {
      margin-top: 1.922rem;
    }
    & > *:last-child {
      margin-top: 2.54rem;
    }
  }
  ${applyMediaQuery("tablet")} {
    & > *:first-child {
      margin-top: 1.3rem;
    }
    & > *:last-child {
      margin-top: 2rem;
    }
  }
  ${applyMediaQuery("mobile")} {
    & > *:first-child {
      margin-top: 1.1rem;
    }
    & > *:last-child {
      margin-top: 2.6rem;
    }
  }
`;

export default PopularityGenreCartoonBase;
