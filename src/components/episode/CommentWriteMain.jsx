import React from "react";
import WriterComment from "./commentwrite/WriterComment";
import StarScore from "./commentwrite/StarScore";

const CommentWriteMain = ({ writer = "이동건" }) => {
  return (
    <>
      <WriterComment writer={writer} />
      <StarScore />
    </>
  );
};

export default CommentWriteMain;
