import React from "react";
import { useState } from "react";
import styled from "styled-components";
import CommentsListHeader from "../components/episode/CommentsListHeader";
import WebtoonThumbnail from "../components/episode/WebtoonThumbnail";
import CommentsListMain from "../components/episode/CommentsListMain";

const Episode = () => {
  const [view, setView] = useState("");

  return (
    <div>
      <WebtoonThumbnail />
      <Center>
        <CommentsListHeader setView={setView} />
        <CommentsListMain view={view} />
      </Center>
    </div>
  );
};

export default Episode;

const Center = styled.div`
  /* display: flex;
  flex-direction: column;

  & > * {
    width: var(--screen-width);
  } */
`;
