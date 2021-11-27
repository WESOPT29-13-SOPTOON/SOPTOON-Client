import React from "react";
import styled from "styled-components";
import { useState } from "react/cjs/react.development";
import TabItem from "./TabItem";

const category = ["요일별", "장르별", "작품별", "작가별", "연도별", "테마웹툰", "완결웹툰"];
// const mobileCategory = ["요일별", "장르별", "작품별", "작가별", "연도별" };

const CategoryTab = () => {
  const [selectedCategory, setSelectedCategory] = useState(0);
  const handleClick = (idx) => {
    setSelectedCategory(idx);
  };
  return (
    <StyledRoot>
      <StyledCategoryTab>
        {category.map((day, idx) => (
          <TabItem
            key={idx}
            value={day}
            isSelected={selectedCategory === idx}
            color={"#000000"}
            onClick={() => handleClick(idx)}
          />
        ))}
      </StyledCategoryTab>
    </StyledRoot>
  );
};

const StyledRoot = styled.section`
  padding: 1.2rem 2.4rem 1.5rem 2.4rem;
`;

const StyledCategoryTab = styled.div`
  display: flex;
  & * {
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
