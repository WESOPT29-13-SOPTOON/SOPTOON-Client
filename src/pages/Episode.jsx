import React from "react";
import { useState } from "react";
// import { useLocation } from "react-router-dom";
import WebtoonThumbnail from "../components/episode/WebtoonThumbnail";
import CommentsListHeader from "../components/episode/CommentsListHeader";
import CommentsListMain from "../components/episode/CommentsListMain";
import CommentsListFooter from "../components/episode/CommentsListFooter";
import CommentWriteMain from "../components/episode/CommentWriteMain";
import View from "../components/episode/View";
import LocalNav from "../components/episode/LocalNav";

const Episode = () => {
  const [view, setView] = useState("");
  // const location = useLocation();
  // const id = location.state.id;
  const id = 1;

  return (
    <div>
      <LocalNav />
      <WebtoonThumbnail />
      <View />
      <CommentWriteMain />
      <CommentsListHeader setView={setView} />
      <CommentsListMain view={view} id={id} />
      <CommentsListFooter />
    </div>
  );
};

// const Center = styled.div`
//   display: flex;
//   justify-content: center;

//   & > * {
//     width: var(--screen-width);
//   }
// `;

export default Episode;
