import React, { useState } from "react";
import styled, { css } from "styled-components";
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
      </StyledWeeklyTab>
    </StyledRoot>
    //<StyledRoot>
    // <Screen tablet mobile>
    //  <TabItem
    //   value={"요일전체"}
    //   isSelected={selectedDay === idx}
    //   color={"#60d171"}
    //   onClick={() => handleClick(idx)}
    // />
    //  {week.filter((tab, idx) => selectedDay === idx).map((day, idx) => (
    //  <TabItem
    //   key={idx}
    //   value={day}
    //   isSelected={selectedDay === idx}
    //   color={"#60d171"}
    //   onClick={() => handleClick(idx)}
    // />
    //))}
    // </Screen>
    //</StyledRoot>
  );
};

const StyledRoot = styled.section`
  padding: 1.6rem 0;
`;
// @media ${({ theme }) => theme.device.tablet} {
//     padding: 1.6rem 3.2rem;
//   }
//타블렛에서 모바일 가는 사이를 하나더 정의해 놓을지?
//내꺼가 타블렛에서 모바일 가는 사이를 100%로 놓고 점점 줄어들게 할 수가 없는 부분이 있어서

const StyledWeeklyTab = styled.div`
  position: relative;
  background-color: #f9f9fc;
  border-radius: 1.6rem;
  width: 64.5rem;
  height: 5rem;
  /* width: 17.6rem; 모바일 반응형 */
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
  border-radius: 0.5rem;
  background-color: #ffffff;
  transition: transform 0.3s;
  ${({ idx }) =>
    css`
      transform: translateX(${idx * 7.7}rem);
    `}
`;

export default WeeklyTab;
