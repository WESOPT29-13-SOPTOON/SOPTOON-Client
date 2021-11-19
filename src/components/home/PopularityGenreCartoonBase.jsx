import React from "react";
import styled from "styled-components";
import BaseInfo from "./BaseInfo";

const PopularityGenreCartoonBase = ({ genreName, data }) => {
  return (
    <StyledBase>
      <StyledHeader>
        <span>{genreName}</span>
      </StyledHeader>
      <StyledBaseInfos>
        {data.map((data, idx) => (
          <BaseInfo key={idx} data={data} type={"popularityCartoonVersion"} />
        ))}
      </StyledBaseInfos>
    </StyledBase>
  );
};

const StyledBase = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  & > * {
    margin-right: 2.7rem;
    margin-left: 3.6rem;
    font-size: 1.2rem;
  }
`;

const StyledHeader = styled.div`
  font-weight: 800;
  font-size: 1.2rem;
  color: #737373;
`;

const StyledBaseInfos = styled.div`
  display: flex;
  flex-direction: column;
  & > * {
    margin-top: 2rem;
    & > img {
      width: 8.1rem;
      height: 9.9rem;
    }
  }
`;

export default PopularityGenreCartoonBase;
