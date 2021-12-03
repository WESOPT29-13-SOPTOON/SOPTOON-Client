import React, { useEffect } from "react";
import { useState } from "react";
// import { useLocation } from "react-router-dom";
import WebtoonThumbnail from "../components/episode/WebtoonThumbnail";
import CommentsListHeader from "../components/episode/CommentsListHeader";
import CommentsListMain from "../components/episode/CommentsListMain";
import CommentsListFooter from "../components/episode/CommentsListFooter";
import CommentWriteMain from "../components/episode/CommentWriteMain";
import View from "../components/episode/View";
import LocalNav from "../components/episode/LocalNav";
import { getBestComments, getComments } from "../libs/api";

const Episode = () => {
  const [view, setView] = useState("");
  const [commentsInfo, setCommentsInfo] = useState([]);
  const [bestCommentsInfo, setBestCommentsInfo] = useState([]);
  const id = 1;

  useEffect(async () => {
    const { data } = await getComments(id);
    setCommentsInfo(data);
  }, []);

  useEffect(async () => {
    const { data } = await getBestComments(id);
    setBestCommentsInfo(data);
  }, []);
  // const location = useLocation();
  // const id = location.state.id;

  return (
    <div>
      <LocalNav />
      <WebtoonThumbnail />
      <View />
      <CommentWriteMain />
      <CommentsListHeader setView={setView} />
      <CommentsListMain view={view} id={id} commentsInfo={commentsInfo} bestCommentsInfo={bestCommentsInfo} />
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
