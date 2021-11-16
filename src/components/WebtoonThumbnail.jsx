import React from "react";
import styled from "styled-components";
import plusBtn from "../assets/icons/plus-circle.svg";

const WebtoonThumbnail = () => {
  return (
    <StyledRoot>
      <StyledThumbnailImg src="../assets/images/img_jojocomics.png" alt="썸네일" />
      <StyledTitle>조조코믹스</StyledTitle>
      <StyledIntro>
        <strong>이동건\n</strong>&lt;유미의 세포들&gt; 이동건 작가의 로맨스 시트콤 신작!\n오늘 할 일을 내일로 미루는
        평범한 직장인 은조.\n 그녀와는 다르게 외모와 매너 모든 것을 철저히 관리하는 직장동료 조완.\n 케미 좋은 두 사람의
        다양하고 유쾌한 단편들이 여러분들을 기다리고 있습니다.\n매주 수토! &lt;조조코믹스&gt;에서 단편만화 같은 일상을
        즐겨보세요!
      </StyledIntro>
      <StyledBtn>
        <button>관심웹툰</button>
        <button>첫화보기</button>
        <button>목록보기</button>
        <button>다른 작품</button>
      </StyledBtn>
    </StyledRoot>
  );
};

export default WebtoonThumbnail;
