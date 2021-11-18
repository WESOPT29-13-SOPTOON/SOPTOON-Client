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
    <StyledWeeklyTab>
      <div>
        {week.map((day, idx) => (
          <TabItem
            key={idx}
            value={day}
            isSelected={selectedDay === idx}
            fontSize={"1.25rem"}
            color={"#60d171"}
            onClick={() => handleClick(idx)}
          />
        ))}
      </div>
    </StyledWeeklyTab>
  );
};

const StyledWeeklyTab = styled.section`
  padding: 1.6rem 0;
  & > div {
    background-color: #f9f9fc;
    border-radius: 1.6rem;
    height: 5rem;
    padding: 1.7rem 2.4rem 1.8rem 2.4rem;
    display: flex;
    align-items: center;
    & * {
      background-color: #f9f9fc;
      margin-right: 3.5rem;
      font-size: 1.25rem;
      &:last-child {
        margin-right: 0;
      }
    }
  }
`;

export default WeeklyTab;
