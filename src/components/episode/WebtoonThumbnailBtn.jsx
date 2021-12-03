import React from "react";
import styled from "styled-components";
import plusIcon from "../../assets/icons/plus-circle.svg";
import { applyMediaQuery } from "../../styles/mediaQuery";
import Screen from "../../styles/Screen";

const WebtoonThumbnailBtn = () => {
  return (
    <StyledRoot>
      <StyledBtn>
        <Screen desktop tablet>
          <button>
            <img src={plusIcon} />
            관심웹툰
          </button>
          <button>첫화보기</button>
          <button>목록보기</button>
          <button>다른 작품</button>
        </Screen>
        <Screen mobile>
          <button>
            <img src={plusIcon} />
            관심웹툰
          </button>
        </Screen>
      </StyledBtn>
    </StyledRoot>
  );
};

export default WebtoonThumbnailBtn;

const StyledRoot = styled.div``;

const StyledBtn = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-top: 2.4rem;
  text-align: center;

  ${applyMediaQuery("mobile")} {
    display: flex;
    justify-content: center;
    margin-top: 5rem;
  }

  button {
    background-color: #f9f9fc;
    color: #737373;
    border-radius: 1.2rem;
    width: 12.8rem;
    height: 5rem;
    border: none;
    margin-right: 1.9rem;
    letter-spacing: -0.2rem;
  }

  button:nth-child(1) {
    background-color: #60d171;
    color: #ffffff;
    //이미지랑 글자 정렬 맞출때
    display: flex;
    align-items: center;
    justify-content: center;

    & > img {
      width: 1.6rem;
      height: 1.6rem;
      margin-right: 0.4rem;
      vertical-align: middle;
    }
  }
`;
