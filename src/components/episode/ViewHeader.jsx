import React from "react";
import styled from "styled-components";
import { applyMediaQuery } from "../../styles/mediaQuery";
import Screen from "../../styles/Screen";

const ViewHeader = () => {
  return (
    <StyledRoot>
      <h3>오늘부터 마스크 1화</h3>
      <Screen desktop tablet>
        <span>등록일 2021.11.05</span>
      </Screen>
    </StyledRoot>
  );
};

const StyledRoot = styled.header`
  display: flex;
  justify-content: space-between;
  & > h3 {
    ${applyMediaQuery("mobile")} {
      font-size: 1.5rem;
    }
    font-size: 2rem;
    font-weight: bold;
  }

  & > span {
    font-size: 1.25rem;
    color: #737373;
  }
`;

export default ViewHeader;
