import React from "react";
import { useState } from "react";
import WebtoonThumbnail from "../components/episode/WebtoonThumbnail";
import CommentsListHeader from "../components/episode/CommentsListHeader";
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
