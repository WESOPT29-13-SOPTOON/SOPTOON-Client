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
        {/* <Screen desktop tablet> */}
        {category.map((day, idx) => (
          <TabItem
            key={idx}
            value={day}
            isSelected={selectedCategory === idx}
            color={"#000000"}
            onClick={() => handleClick(idx)}
          />
        ))}
        {/* </Screen> */}
        {/* <Screen desktop tablet>
        {mobileCategory.map((day, idx) => (
          <TabItem
            key={idx}
            value={day}
            isSelected={selectedCategory === idx}
            color={"#000000"}
            onClick={() => handleClick(idx)}
          />
        ))}
        </Screen> */}
      </StyledCategoryTab>
    </StyledRoot>
  );
};

//화면마다 하나씩 없어지게 만들어야 할 것 같은데.. 이런 경우에는 어떻게 해결하면 좋을지
//그냥 테블릿 화면보다 작아지면 바로 모바일 화면으로 전환하게 만든다던가
const StyledRoot = styled.section`
  padding: 1.2rem 2.4rem 1.5rem 2.4rem;
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
