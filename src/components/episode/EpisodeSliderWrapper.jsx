import React, { useRef, useState } from "react";
import styled from "styled-components";
import Img from "../../assets/images/img_nextjojo@3x.png";
import { ReactComponent as AfterIcon } from "../../assets/icons/btn_after.svg";
import { ReactComponent as BeforeIcon } from "../../assets/icons/btn_before.svg";
import EpisodeSlider from "./EpisodeSlider";
import Screen from "../../styles/Screen";
import { applyMediaQuery } from "../../styles/mediaQuery";

const episodeList = [
  { img: "../../assets/images/episodeImg3.png", name: "럭키포인트 3화" },
  { img: "../../assets/images/episodeImg4.png", name: "럭키포인트 4화" },
  { img: "../../assets/images/episodeImg5.png", name: "럭키포인트 5화" },
  { img: "../../assets/images/episodeImg6.png", name: "럭키포인트 6화" },
  { img: "../../assets/images/episodeImg7.png", name: "럭키포인트 7화" },
  { img: "../../assets/images/episodeImg8.png", name: "럭키포인트 8화" },
  { img: "../../assets/images/episodeImg9.png", name: "럭키포인트 9화" },
  { img: "../../assets/images/episodeImg10.png", name: "럭키포인트 10화" },
  { img: "../../assets/images/episodeImg11.png", name: "럭키포인트 11화" },
  { img: "../../assets/images/episodeImg12.png", name: "럭키포인트 END", select: true },
  { img: "../../assets/images/episodeImg13.png", name: "오늘부터 마스..." },
];

const EpisodeSliderWrapper = ({ maxEpisodeImg }) => {
  const [page, setPage] = useState(2);
  const [maxPage, setMaxPage] = useState(Math.floor(episodeList.length / maxEpisodeImg));
  const sliderWidth = maxEpisodeImg * 14.8;

  const sliderRef = useRef();
  const handleBeforeClick = () => {
    if (page - 1 < 0) return;
    sliderRef.current.style.transform = `translateX(${(page - 1) * -sliderWidth}rem)`;
    setPage(page - 1);
  };

  const handleAfterClick = () => {
    if (page + 1 > maxPage) return;
    sliderRef.current.style.transform = `translateX(${(page + 1) * -sliderWidth}rem)`;
    setPage(page + 1);
  };

  return (
    <StyledRoot>
      <article>
        <button onClick={handleBeforeClick}>
          <BeforeIcon />
          <Screen mobile>
            <span>이전화</span>
          </Screen>
        </button>
        <Screen desktop tablet>
          <EpisodeSlider
            episodeList={episodeList}
            maxEpisodeImg={maxEpisodeImg}
            maxPage={maxPage}
            setMaxPage={setMaxPage}
            sliderWidth={sliderWidth}
            sliderRef={sliderRef}
          />
        </Screen>
        <button onClick={handleAfterClick}>
          <Screen mobile>
            <span>다음화</span>
          </Screen>
          <AfterIcon />
        </button>
      </article>
      <img src={Img} alt="" />
    </StyledRoot>
  );
};

const StyledRoot = styled.footer`
  width: 100%;
  ${applyMediaQuery("mobile")} {
    height: 100%;
    border: 0;
    border-top: 0.1rem solid #d2d2d2;
  }
  height: 25.6rem;
  border: 0.1rem solid #d2d2d2;
  display: flex;
  flex-direction: column;
  align-items: center;

  & > article {
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    ${applyMediaQuery("mobile")} {
      justify-content: space-between;
    }

    button {
      border: 0;
      background-color: white;
      color: #737373;
      font-size: 1.25rem;
      ${applyMediaQuery("mobile")} {
        display: flex;
        align-items: center;
        height: 5.2rem;
      }

      span {
        padding: 0 0.8rem;
      }
      svg {
        width: 3.3rem;
        height: 6.2rem;
        padding: 1.8rem 1rem;
        ${applyMediaQuery("mobile")} {
          padding: 1.4rem 0;
          width: 0.8rem;
        }
      }
    }
  }
  & > img {
    width: 100%;
  }
`;

export default EpisodeSliderWrapper;
