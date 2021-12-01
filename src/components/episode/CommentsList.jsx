import React from "react";
import styled from "styled-components";
import Comment from "../episode/Comment";

const CommentsList = ({ view, commentsData }) => {
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
  padding-right: 19.8rem;
`;
