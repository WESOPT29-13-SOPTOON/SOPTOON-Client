import React from "react";
import styled from "styled-components";
import { applyMediaQuery } from "../../styles/mediaQuery";
import Comment from "../episode/Comment";

const CommentsList = ({ commentsData, view }) => {
  //구조 분해 할당
  return (
    <StyledRoot>
      <StyledWrapper>
        {commentsData.map((comment, i) => (
          <Comment view={view} comment={comment} key={`comment-${i}`} />
        ))}
      </StyledWrapper>
    </StyledRoot>
  );
};

export default CommentsList;

const StyledRoot = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > * {
    width: var(--screen-width);
  }
`;

const StyledWrapper = styled.div`
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
