import React from "react";
import CommentsList from "../components/episode/CommentsList";
import WebtoonThumbnail from "../components/episode/WebtoonThumbnail";
import styled from "styled-components";

const Episode = () => {
  return (
    <StyledRoot>
      <WebtoonThumbnail />
      <CommentsList />
    </StyledRoot>
  );
};

export default Episode;

const StyledRoot = styled.div``;
