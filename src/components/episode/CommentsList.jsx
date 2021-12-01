import React from "react";
import styled from "styled-components";
import Comment from "../episode/Comment";

const CommentsList = ({ view, commentsData }) => {
  //구조 분해 할당

  return (
    <StyledRoot>
      {commentsData.map((comment, i) => (
        <Comment view={view} comment={comment} key={`comment-${i}`} />
      ))}
    </StyledRoot>
  );
};

export default CommentsList;

const StyledRoot = styled.div`
  /* border-bottom: 0.1rem solid #e5e5e5;
  margin-bottom: 2.4rem;
  padding-bottom: 2.4rem;
  padding-left: 2.1rem;
  padding-right: 2.4rem; */
`;
