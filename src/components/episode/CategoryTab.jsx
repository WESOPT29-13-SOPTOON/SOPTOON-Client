import React, { useState } from "react";
import styled from "styled-components";
import TabItem from "./TabItem";
import Screen from "../../styles/Screen";
import { applyMediaQuery } from "../../styles/mediaQuery";

const category = ["요일별", "장르별", "작품별", "작가별", "연도별", "테마웹툰", "완결웹툰"];
const mobileCategory = ["요일별", "장르별", "작품별", "작가별", "연도별"];

const CategoryTab = () => {
  const [selectedCategory, setSelectedCategory] = useState(0);
  const handleClick = (idx) => {
    setSelectedCategory(idx);
  };
  return (
    <StyledRoot>
      <StyledCategoryTab>
        <Screen desktop tablet>
          {category.map((day, idx) => (
            <TabItem
              key={idx}
              value={day}
              isSelected={selectedCategory === idx}
              color={"#000000"}
              onClick={() => handleClick(idx)}
            />
          ))}
        </Screen>
        <Screen mobile>
          {mobileCategory.map((day, idx) => (
            <TabItem
              key={idx}
              value={day}
              isSelected={selectedCategory === idx}
              color={"#000000"}
              onClick={() => handleClick(idx)}
            />
          ))}
        </Screen>
      </StyledCategoryTab>
    </StyledRoot>
  );
};

const StyledRoot = styled.section`
  padding: 1.2rem 0 1.5rem 2.4rem;
  ${applyMediaQuery("mobile")} {
    padding-left: 0;
  }
`;

const StyledCategoryTab = styled.div`
  display: flex;
  & > * {
    background-color: #ffffff;
    color: #737373;
    margin-right: 2.636rem;
    font-size: 1.25rem;
  }
  & > *:last-child {
    margin-right: 0;
  }
`;

export default CategoryTab;
