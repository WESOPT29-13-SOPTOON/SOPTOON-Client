import React from "react";
import { useState } from "react";
import CommentsListHeader from "../components/episode/CommentsListHeader";
import WebtoonThumbnail from "../components/episode/WebtoonThumbnail";
import CommentsListMain from "../components/episode/CommentsListMain";

const Episode = () => {
  const [view, setView] = useState("");

  return (
    <div>
      <WebtoonThumbnail />
      <CommentsListHeader setView={setView} />
      <CommentsListMain view={view} />
    </div>
  );
};

export default Episode;
