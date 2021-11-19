import React from "react";
import styled from "styled-components";
import ImgSlader from "./ImgSlader";
import newWebtoon from "../../assets/images/img_new";

const TodayWebtoon = () => {
  return (
    <StyledRoot>
      <StyledTodayWebtoon>
        <div>
          오늘의 <strong>웹툰</strong>
        </div>
        <StyledNav>
          <button>인기순</button>
          <button>업데이트순</button>
          <button>조회순</button>
          <button>별점순</button>
        </StyledNav>
        <ImgSlader />
      </StyledTodayWebtoon>
      <StyledRight>
        <StyledNewComic>
          <div>
            <strong>새로운</strong>
            <p>베스트 도전만화</p>
          </div>
          <img src={newWebtoon} alt="새로운 베스트 도전만화" />
          <p>이게좋아</p>
          <p>lobyeol</p>
        </StyledNewComic>
        <StyledBtn>
          <button>웹툰 올리기</button>
          <button>고객센터</button>
          <button>공지사항</button>
        </StyledBtn>
      </StyledRight>
    </StyledRoot>
  );
};

export default TodayWebtoon;

const StyledRoot = styled.div``;

const StyledTodayWebtoon = styled.div``;

const StyledNav = styled.div``;

const StyledRight = styled.div``;

const StyledNewComic = styled.div`
  border-radius: 0.5rem;
  border-style: 0.1rem solid #e5e5e5;
  background-color: #f9f9fc;
  & > div {
    font-weight: bold;
    font-size: 1.5rem;
    & > strong {
      color: #60d171;
    }
    & > p {
    }
  }
`;

const StyledBtn = styled.div``;
