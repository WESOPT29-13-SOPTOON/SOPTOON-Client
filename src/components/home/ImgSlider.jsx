import React from "react";
import styled from "styled-components";
import today1 from "../../assets/images/img_today1.png";
import today2 from "../../assets/images/img_today2.png";
import today3 from "../../assets/images/img_today3.png";
import viewBtn from "../../assets/icons/ic_viewmore.svg";
import circleBtn from "../../assets/icons/ic_circle.svg";
import { applyMediaQuery } from "../../styles/mediaQuery";
import Screen from "../../styles/Screen";

const ImgSlader = () => {
  // 화살표 눌렀을 때 이미지 움직이기
  // 이미지 인덱스에 따라 동그라미에 초록색 색깔 뜨게하기
  // 웹툰 이미지 앞에 웹툰 글씨
  return (
    <StyledRoot>
      <div>11월 10일 수요일</div>
      <StyledSlader>
        <Screen desktop>
          <button>
            <img src={viewBtn} />
          </button>
        </Screen>
        <StyledImg>
          <img src={today1} />
          <img src={today2} />
          <img src={today3} />
        </StyledImg>
        <Screen desktop>
          <button>
            <img src={viewBtn} />
          </button>
        </Screen>
      </StyledSlader>
      <StyledBtn>
        <button>
          <img src={circleBtn} />
        </button>
        <button>
          <img src={circleBtn} />
        </button>
        <button>
          <img src={circleBtn} />
        </button>
      </StyledBtn>
    </StyledRoot>
  );
};

export default ImgSlader;

const StyledRoot = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 7.23rem;

  & > div {
    color: #737373;
    font-size: 1.13rem;
    letter-spacing: 0.1rem;
  }

  ${applyMediaQuery("mobile")} {
    margin-top: 0;
  }
`;

const StyledSlader = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 1.26rem;

  button {
    border: none;
    background-color: transparent;
    width: 1.05rem;
    height: 0.62rem;
    margin-top: 8rem;
  }

  button:nth-child(3) {
    transform: rotate(180deg);
  }
`;

const StyledImg = styled.div`
  display: flex;
  flex-direction: row;

  & > img {
    ${applyMediaQuery("desktop")} {
      width: 30.6rem;
      height: 16.8rem;
    }
    ${applyMediaQuery("tablet")} {
      width: 23.8rem;
      height: 13rem;
    }
    ${applyMediaQuery("mobile")} {
      width: 19.5rem;
      height: 11.1rem;
    }
    border-radius: 0.6rem;
    position: relative;

    &:nth-child(1) {
      transform: scale(0.8);
      ${applyMediaQuery("tablet")} {
        left: -20px;
      }
      ${applyMediaQuery("mobile")} {
        left: -30px;
      }
    }
    &:nth-child(2) {
      z-index: 2;
      left: -180px;
    }
    &:nth-child(3) {
      transform: scale(0.8);
      left: -360px;
      ${applyMediaQuery("tablet")} {
        left: -340px;
      }
      ${applyMediaQuery("mobile")} {
        left: -330px;
      }
    }
  }

  ${applyMediaQuery("desktop")} {
    width: 49.717rem;
  }
  ${applyMediaQuery("tablet")} {
    width: 26.103rem;
  }
  ${applyMediaQuery("mobile")} {
    width: 20.233rem;
  }
`;

const StyledBtn = styled.div`
  & > button {
    border: none;
    background-color: transparent;
    padding: 0;
  }

  & > button:nth-child(2) {
    margin-left: 0.2rem;
    margin-right: 0.2rem;
    img {
      filter: opacity(0.5) drop-shadow(0 0 0 #60d171);
    }
  }
`;
