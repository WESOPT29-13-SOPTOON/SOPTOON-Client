import React, { useRef, useState } from "react";
import styled from "styled-components";
import Img from "../../assets/images/img_nextjojo@3x.png";
import EpisodeImg from "./EpisodeImg";
import { ReactComponent as AfterIcon } from "../../assets/icons/btn_after.svg";
import { ReactComponent as BeforeIcon } from "../../assets/icons/btn_before.svg";

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

const EpisodeSlider = ({ maxEpisodeImg }) => {
  const [page, setPage] = useState(2);
  const [maxPage, setMaxPage] = useState(episodeList.length / maxEpisodeImg);
  const [selectedIndex, setSelectedIndex] = useState(10);

  const setEpisodeData = () => {
    const arr = [...episodeList];
    const rest = maxEpisodeImg - (episodeList.length % maxEpisodeImg);
    if (rest === maxEpisodeImg) {
      setMaxPage(maxPage - 1);
      return arr;
    }

    for (let i = 0; i < rest; i++) {
      arr.push({ img: "", name: "" });
    }
    return arr;
  };

  const sliderRef = useRef();
  const handleBeforeClick = () => {
    if (page - 1 < 0) return;
    sliderRef.current.style.transform = `translateX(${(page - 1) * -74}rem)`;
    setPage(page - 1);
  };

  const handleAfterClick = () => {
    if (page + 1 > 2) return;
    sliderRef.current.style.transform = `translateX(${(page + 1) * -74}rem)`;
    setPage(page + 1);
  };

  const handleEpisodeClick = (idx) => {
    setSelectedIndex(idx);
  };

  return (
    <StyledRoot>
      <article>
        <button onClick={handleBeforeClick}>
          <BeforeIcon />
        </button>
        <StyledEpisodeSliderBox>
          <StyledEpisodeList ref={sliderRef} page={page}>
            {setEpisodeData().map((episode, idx) => (
              <EpisodeImg
                key={idx}
                episodeData={episode}
                selected={idx === selectedIndex}
                handleClick={() => handleEpisodeClick(idx)}
              />
            ))}
          </StyledEpisodeList>
        </StyledEpisodeSliderBox>
        <button onClick={handleAfterClick}>
          <AfterIcon />
        </button>
      </article>
      <img src={Img} alt="" />
    </StyledRoot>
  );
};

const StyledRoot = styled.footer`
  width: 100%;
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
    button {
      border: 0;
      background-color: white;
      svg {
        width: 3.3rem;
        height: 6.2rem;
        padding: 1.8rem 1rem;
      }
    }
  }
  & > img {
    width: 100%;
  }
`;

const StyledEpisodeSliderBox = styled.div`
  width: 74rem;
  height: 100%;
  margin-right: 4rem;
  margin-left: 0.4rem;
  position: relative;
  overflow-x: hidden;
`;

const StyledEpisodeList = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  transition: transform linear 0.3s 0.3s;
  transform: translateX(-148rem);
`;

export default EpisodeSlider;
