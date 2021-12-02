import React from "react";
import styled from "styled-components";
import { applyMediaQuery } from "../../styles/mediaQuery";

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
`;

const StyledWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  color: #737373;
  font-size: 1.2rem;
  font-weight: bold;
  letter-spacing: -0.1rem;
  margin-bottom: 10.3rem;

  ${applyMediaQuery("desktop")} {
    width: var(--screen-width);
    padding-right: 19.8rem;
  }
  ${applyMediaQuery("tablet")} {
    width: var(--screen-width);
  }
  ${applyMediaQuery("mobile")} {
    width: var(--screen-width);
  }
`;
