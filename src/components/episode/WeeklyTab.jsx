import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { applyMediaQuery } from "../../styles/mediaQuery";
import Screen from "../../styles/Screen";
import TabItem from "./TabItem";

const week = ["요일전체", "월요웹툰", "화요웹툰", "수요웹툰", "목요웹툰", "금요웹툰", "토요웹툰", "일요웹툰"];

const WeeklyTab = () => {
  const [selectedDay, setSelectedDay] = useState(0);
  const [mobileWeekArr, setMobileWeekArr] = useState(["요일전체", "월요웹툰"]);
  const [mobileSelectedDay, setMobileSelectedDay] = useState(0);

  const handleClick = (idx) => {
    setSelectedDay(idx);
  };

  const handleMobileClick = (idx) => {
    setMobileSelectedDay(idx);
  };

  useEffect(() => {
    if (week[selectedDay] === "요일전체") return;
    setMobileWeekArr(["요일전체", week[selectedDay]]);
  }, [selectedDay]);

  return (
    <StyledRoot>
      <StyledWeeklyTab>
        <Screen desktop tablet>
          <StyledBack idx={selectedDay}></StyledBack>
          {week.map((day, idx) => (
            <TabItem
              key={idx}
              value={day}
              isSelected={selectedDay === idx}
              color={"#60d171"}
              onClick={() => handleClick(idx)}
            />
          ))}
        </Screen>
        <Screen mobile>
          <StyledBack idx={mobileSelectedDay}></StyledBack>
          {mobileWeekArr.map((day, idx) => (
            <TabItem
              key={idx}
              value={day}
              isSelected={mobileSelectedDay === idx}
              color={"#60d171"}
              onClick={() => handleMobileClick(idx)}
            />
          ))}
        </Screen>
      </StyledWeeklyTab>
    </StyledRoot>
  );
};

const StyledRoot = styled.section`
  padding: 1.6rem 0;
`;

const StyledWeeklyTab = styled.div`
  position: relative;
  background-color: #f9f9fc;
  border-radius: 1.6rem;
  width: 64.5rem;
  ${applyMediaQuery("tablet")} {
    margin-left: 3.2rem;
  }
  ${applyMediaQuery("mobile")} {
    width: 17.6rem;
    margin-left: 2.35rem;
  }
  height: 5rem;
  padding: 1.7rem 2.4rem 1.8rem 2.4rem;
  display: flex;
  align-items: center;
  & > * {
    background-color: none;
    margin-right: 3.5rem;
    font-size: 1.25rem;
    letter-spacing: -0.08em;
  }
  & > *:last-child {
    margin-right: 0;
  }
`;

const StyledBack = styled.span`
  position: absolute;
  left: 0.5rem;
  width: 8.4rem;
  height: 3.2rem;
  margin: 0;
  border-radius: 0.8rem;
  background-color: #ffffff;
  box-shadow: 0 0 0.3rem 0 #a6a1bb;
  transition: transform 0.3s;
  ${({ idx }) =>
    css`
      transform: translateX(${idx * 7.7}rem);
    `}
`;

export default WeeklyTab;
