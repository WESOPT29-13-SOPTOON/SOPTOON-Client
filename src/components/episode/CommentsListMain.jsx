import React from "react";
import styled from "styled-components";
import CommentsList from "./CommentsList";

const CommentsListMain = ({ commentsInfo, bestCommentsInfo, view }) => {
  switch (view) {
    case "comment":
      return (
        <StyledMain>
          <CommentsList commentsData={commentsInfo} view={view} />
        </StyledMain>
      );
    case "bestComment":
    default:
      return (
        <StyledMain>
          <CommentsList commentsData={bestCommentsInfo} view={view} />
        </StyledMain>
      );
  }
};

export default CommentsListMain;

const StyledMain = styled.main``;
