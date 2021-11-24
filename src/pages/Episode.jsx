import React from "react";
import styled from "styled-components";
import CommentsList from "../components/episode/CommentsList";
import WebtoonThumbnail from "../components/episode/WebtoonThumbnail";

const Episode = () => {
  return (
    <div>
      <WebtoonThumbnail />
      <Center>
        <CommentsList />
      </Center>
    </div>
  );
};

const Center = styled.div`
  display: flex;
  justify-content: center;

  & > * {
    width: var(--screen-width);
  }
`;

export default Episode;
