import React from "react";
import WriterComment from "./commentwrite/WriterComment";
import StarScore from "./commentwrite/StarScore";
import Comment from "./commentwrite/Comment";
import { postComment } from "../../libs/api";

const CommentWriteMain = ({ writer = "이동건", webtoonId = 1, email = "abc@mail.com" }) => {
  const handleSubmit = async (e, input) => {
    e.preventDefault();
    const data = await postComment({ webtoonId: webtoonId, email: email, comment: input });
    console.log(data);
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
