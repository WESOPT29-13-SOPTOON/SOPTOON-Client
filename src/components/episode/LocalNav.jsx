import React from "react";
import styled from "styled-components";
import { applyMediaQuery } from "../../styles/mediaQuery";
import CategoryTab from "./CategoryTab";
import WeeklyTab from "./WeeklyTab";

const LocalNav = () => {
  return (
    <StyledRoot>
      <CategoryTab />
      <Line />
      <WeeklyTab />
      <Line />
    </StyledRoot>
  );
};

const StyledRoot = styled.div`
  display: flex;
  align-items: center;
  ${applyMediaQuery("mobile")} {
    align-items: stretch;
  }
  flex-direction: column;

  & > * {
    width: var(--screen-width);
  }
`;

const Line = styled.div`
  width: 100%;
  height: 0.1rem;
  background-color: #e5e5e5;
`;

export default LocalNav;
