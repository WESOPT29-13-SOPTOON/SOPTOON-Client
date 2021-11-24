import React from "react";
import styled from "styled-components";
import thumbnail from "../../assets/images/img_jojocomics.png";
import plusIcon from "../../assets/icons/plus-circle.svg";
import WebtoonIntro from "./WebtoonIntro";

const WebtoonThumbnail = () => {
  return (
    <StyledRoot>
      <StyledImgWrapper>
        <img src={thumbnail} alt="썸네일" />
      </StyledImgWrapper>
      <WebtoonIntro />
      <StyledBtn>
        <button>
          <img src={plusIcon} />
          관심웹툰
        </button>
        <button>첫화보기</button>
        <button>목록보기</button>
        <button>다른 작품</button>
      </StyledBtn>
    </StyledRoot>
  );
};

export default WebtoonThumbnail;

const StyledRoot = styled.div`
  border-top: 0.1rem solid #e5e5e5;
  border-bottom: 0.1rem solid #e5e5e5;
  padding-top: 2.4rem;
  padding-bottom: 2.8rem;
  display: flex;
  flex-wrap: wrap;
`;

const StyledImgWrapper = styled.div`
  margin-right: 2.2rem;
  & > img {
    width: 29.6rem;
    height: 16.4rem;
  }
`;

const StyledBtn = styled.div`
  padding-top: 2.4rem;
  float: right;
  & > button {
    background-color: #f9f9fc;
    color: #737373;
    border-radius: 1.2rem;
    width: 12.8rem;
    height: 5rem;
    border: none;
    margin-right: 1.9rem;
  }

  & > button:nth-child(1) {
    background-color: #60d171;
    color: #ffffff;

    & > img {
      width: 1.6rem;
      height: 1.6rem;
      margin-right: 0.4rem;
    }
  }
`;
