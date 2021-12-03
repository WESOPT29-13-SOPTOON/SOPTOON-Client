import React from "react";
import WriterComment from "./commentwrite/WriterComment";

const CommentWriteMain = ({ writer = "이동건" }) => {
  return (
    <>
      <WriterComment writer={writer} />
    </>
  );
};

export default CommentWriteMain;
