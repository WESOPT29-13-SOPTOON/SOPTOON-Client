import React from "react";
import CommentsList from "../components/episode/CommentsList";
import WebtoonThumbnail from "../components/episode/WebtoonThumbnail";
import styled from "styled-components";

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

export default Episode;

const Center = styled.div`
  display: flex;
  justify-content: center;

  & > * {
    width: var(--screen-width);
  }
`;
