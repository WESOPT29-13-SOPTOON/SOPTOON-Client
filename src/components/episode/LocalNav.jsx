import React from "react";
import styled from "styled-components";
import CategoryTab from "./CategoryTab";
import WeeklyTab from "./WeeklyTab";

const LocalNav = () => {
  return (
    <StyledLocalNav>
      <CategoryTab />
      <Line />
      <WeeklyTab />
      <Line />
    </StyledLocalNav>
  );
};

const StyledLocalNav = styled.div`
  display: flex;
  align-items: center;
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
