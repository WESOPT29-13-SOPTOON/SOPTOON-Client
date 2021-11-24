import React from "react";
import styled from "styled-components";

const ViewHeader = () => {
  return (
    <StyledRoot>
      <h3>오늘부터 마스크 1화</h3>
      <span>등록일 2021.11.05</span>
    </StyledRoot>
  );
};

const StyledRoot = styled.header`
  display: flex;
  justify-content: space-between;
  & > h3 {
    font-size: 2rem;
    font-weight: bold;
  }

  & > span {
    font-size: 1.25rem;
    color: #737373;
  }
`;

export default ViewHeader;
