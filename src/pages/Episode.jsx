import React from "react";
import { useState } from "react";
import CommentsListHeader from "../components/episode/CommentsListHeader";
import WebtoonThumbnail from "../components/episode/WebtoonThumbnail";
import CommentsListMain from "../components/episode/CommentsListMain";
import CommentsListFooter from "../components/episode/CommentsListFooter";

const Episode = () => {
  const [view, setView] = useState("");

  return (
    <div>
      <WebtoonThumbnail />
      <CommentsListHeader setView={setView} />
      <CommentsListMain view={view} />
      <CommentsListFooter />
    </div>
  );
};

export default Episode;
