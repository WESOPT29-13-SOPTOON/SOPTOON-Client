import React, { useState } from "react";
import styled from "styled-components";
import TabItem from "./TabItem";

const week = ["요일전체", "월요웹툰", "화요웹툰", "수요웹툰", "목요웹툰", "금요웹툰", "토요웹툰", "일요웹툰"];

const WeeklyTab = () => {
  const [selectedDay, setSelectedDay] = useState(0);
  const handleClick = (idx) => {
    setSelectedDay(idx);
  };
  return (
    <StyledRoot>
      <StyledWeeklyTab>
        {week.map((day, idx) => (
          <TabItem
            key={idx}
            value={day}
            isSelected={selectedDay === idx}
            color={"#60d171"}
            onClick={() => handleClick(idx)}
          />
        ))}
      </StyledWeeklyTab>
    </StyledRoot>
    //<StyledRoot>
    //  <TabItem value={"요일전체"}
    //   isSelected={true}
    //   color={"#60d171"}
    //   onClick={() => handleClick(idx)}
    // />
    //  {week.filter((tab, idx) => selectedDay === idx).map((day, idx) => (
    //  <TabItem
    //   key={idx}
    //   value={day}
    //   isSelected={true}
    //   color={"#60d171"}
    //   onClick={() => handleClick(idx)}
    // />
    //))}
    //</StyledRoot>
  );
};

const StyledRoot = styled.section`
  padding: 1.6rem 0;
`;

const StyledWeeklyTab = styled.div`
  background-color: #f9f9fc;
  border-radius: 1.6rem;
  width: 64.5rem;
  height: 5rem;
  /* width: 17.6rem; 모바일 반응형 */
  padding: 1.7rem 2.4rem 1.8rem 2.4rem;
  display: flex;
  align-items: center;
  & * {
    background-color: #f9f9fc;
    margin-right: 3.5rem;
    font-size: 1.25rem;
    letter-spacing: -0.15em;
    &:last-child {
      margin-right: 0;
    }
  }
`;

export default WeeklyTab;
