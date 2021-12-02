import React from "react";
import styled from "styled-components";

const CommentsListFooter = () => {
  return (
    <StyledRoot>
      <StyledWrapper>전체 댓글 더보기 &gt;</StyledWrapper>
    </StyledRoot>
  );
};

export default CommentsListFooter;

const StyledRoot = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;

  & > * {
    width: var(--screen-width);
  }
`;

const StyledWrapper = styled.div`
  padding-right: 19.8rem;
  color: #737373;
  font-size: 1.2rem;
  font-weight: bold;
  letter-spacing: -0.1rem;
`;
//오른쪽 정렬 어케하는지
