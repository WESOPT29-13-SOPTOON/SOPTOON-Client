import React from "react";
import WriterComment from "./commentwrite/WriterComment";
import StarScore from "./commentwrite/StarScore";
import Comment from "./commentwrite/Comment";
import { postComment } from "../../libs/api";

const CommentWriteMain = ({ writer = "이동건", webtoonId = 1, email = "kkkkk121", addComment }) => {
  const handleSubmit = async (e, input) => {
    e.preventDefault();
    const data = await postComment({ webtoonId, email, comment: input });
    addComment({
      nickname: "솝트짱",
      email,
      ...data.data[0],
    });
  };

  return (
    <>
      <WriterComment writer={writer} />
      <StarScore />
      <Comment handleSubmit={handleSubmit} />
    </>
  );
};

export default CommentWriteMain;
