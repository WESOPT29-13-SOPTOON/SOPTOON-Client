import React from "react";
import styled from "styled-components";
import thumbnail from "../../assets/images/img_jojocomics.png";
import WebtoonIntro from "./WebtoonIntro";
import { applyMediaQuery } from "../../styles/mediaQuery";
import WebtoonThumbnailBtn from "./WebtoonThumbnailBtn";

const WebtoonThumbnail = () => {
  return (
    <StyledRoot>
      <StyledWrapper>
        <StyledHeader>
          <StyledImgWrapper>
            <img src={thumbnail} alt="썸네일" />
          </StyledImgWrapper>
          <WebtoonIntro />
        </StyledHeader>
        <WebtoonThumbnailBtn />
      </StyledWrapper>
    </StyledRoot>
  );
};

export default WebtoonThumbnail;

const StyledRoot = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledWrapper = styled.div`
  border-top: 0.1rem solid #e5e5e5;
  border-bottom: 0.1rem solid #e5e5e5;
  padding-top: 2.4rem;
  padding-bottom: 2.8rem;
  & > * {
    width: var(--screen-width);
  }
`;

const StyledHeader = styled.div`
  display: flex;
  /* flex-direction: inline-; */
`;

const StyledImgWrapper = styled.div`
  margin-right: 2.2rem;
  img {
    width: 29.6rem;
    height: 16.4rem;
    ${applyMediaQuery("mobile")} {
      width: 10.4rem;
      height: 5.8rem;
    }
  }
`;
