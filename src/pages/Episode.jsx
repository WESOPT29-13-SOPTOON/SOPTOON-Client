import React from "react";
import { useState } from "react";
// import { useLocation } from "react-router-dom";
import WebtoonThumbnail from "../components/episode/WebtoonThumbnail";
import CommentsListHeader from "../components/episode/CommentsListHeader";
import CommentsListMain from "../components/episode/CommentsListMain";
import CommentsListFooter from "../components/episode/CommentsListFooter";

const Episode = () => {
  const [view, setView] = useState("");
  // const location = useLocation();
  // const id = location.state.id;
  const id = 1;

  return (
    <div>
      <WebtoonThumbnail />
      <CommentsListHeader setView={setView} />
      <CommentsListMain view={view} id={id} />
      <CommentsListFooter />
    </div>
  );
};

export default Episode;
