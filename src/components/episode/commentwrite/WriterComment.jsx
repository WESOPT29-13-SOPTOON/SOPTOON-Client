import React from "react";
import styled from "styled-components";

const WriterComment = ({ writer }) => {
  return (
    <StyledRoot>
      <p>
        작가의 말<span>({writer})</span>
      </p>
    </StyledRoot>
  );
};

const StyledRoot = styled.div`
  width: var(--screen-width);
  height: 94px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #d2d2d2;
  p {
    font-size: 20px;
    font-weight: bold;
    padding-left: 20px;
  }
  span {
    font-size: 12.5px;
    font-weight: normal;
  }
`;

export default WriterComment;
