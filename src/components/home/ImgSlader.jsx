import React from "react";
import styled from "styled-components";
import today1 from "../../assets/images/img_today1.png";
import today2 from "../../assets/images/img_today2.png";
import today3 from "../../assets/images/img_today3.png";
import viewBtn from "../../assets/icons/ic_viewmore.png";
import circleBtn from "../../assets/icons/ic_circle.png";

const ImgSlader = () => {
  return (
    <StyledRoot>
      <div>11월 10일 수요일</div>
      <StyledSlader>
        <button>
          <img src={viewBtn} />
        </button>
        <StyledImg>
          <img src={today1} />
          <img src={today2} />
          <img src={today3} />
        </StyledImg>
        <button>
          <img src={viewBtn} />
        </button>
      </StyledSlader>
      {/*이미지 및 동그란 버튼*/}
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
  }
`;

const StyledSlader = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 1.26rem;

  & > button {
    border: none;
    background-color: transparent;
    width: 1.05rem;
    height: 0.62rem;
    margin-top: 8rem;

    & > img {
    }
  }

  & > button:nth-child(1) {
    transform: scaleX(-1);
  }
`;

const StyledImg = styled.div`
  display: flex;
  flex-direction: row;

  & > img {
    width: 30.6rem;
    height: 16.8rem;
    border-radius: 0.6rem;
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
    & > img {
      filter: opacity(0.5) drop-shadow(0 0 0 #60d171);
    }
  }
`;
