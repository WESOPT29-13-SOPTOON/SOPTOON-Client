import React from "react";
import CommentsList from "../components/episode/CommentsList";
import WebtoonThumbnail from "../components/episode/WebtoonThumbnail";

const Episode = () => {
  return (
    <div>
      <WebtoonThumbnail />
      <CommentsList />
    </div>
  );
};

export default Episode;
