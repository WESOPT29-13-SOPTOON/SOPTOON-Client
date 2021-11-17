import React from "react";
import styled from "styled-components";
import thumbnail from "../../assets/images/img_jojocomics.png";
import plusIcon from "../../assets/icons/plus-circle.svg";

const WebtoonThumbnail = () => {
  return (
    <StyledRoot>
      <StyledImgWrapper>
        <img src={thumbnail} alt="썸네일" />
      </StyledImgWrapper>
      <StyledIntro>
        <h2>조조코믹스</h2>
        <h5>이동건</h5>
        <p>&lt;유미의 세포들&gt; 이동건 작가의 로맨스 시트콤 신작!</p>
        <p>오늘 할 일을 내일로 미루는 평범한 직장인 은조.</p>
        <p>그녀와는 다르게 외모와 매너 모든 것을 철저히 관리하는 직장동료 조완.</p>
        <p>케미 좋은 두 사람의 다양하고 유쾌한 단편들이 여러분들을 기다리고 있습니다.</p>
        <p>매주 수토! &lt;조조코믹스&gt;에서 단편만화 같은 일상을 즐겨보세요!</p>
      </StyledIntro>
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

const StyledIntro = styled.section`
  font-size: 1.25rem;
  color: #737373;

  & > h2 {
    font-size: 3.3rem;
    color: black;
    margin-bottom: 0.8rem;
  }

  & > h5 {
    font-weight: bold;
    margin-bottom: 0.8rem;
    line-height: 1.9rem;
  }

  & > p {
    line-height: 1.9rem;
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
