import React from "react";
import CommentsList from "../components/episode/CommentsList";
import WebtoonThumbnail from "../components/episode/WebtoonThumbnail";
import styled from "styled-components";
import { useState } from "react";

const Episode = () => {
  const [view, setView] = useState("");

  return (
    <div>
      <WebtoonThumbnail />
      <Center>
        <CommentsList setView={setView} view={view} />
      </Center>
    </div>
  );
};

export default Episode;

const Center = styled.div`
  display: flex;
  justify-content: center;

  & > * {
    width: var(--screen-width);
  }
`;
