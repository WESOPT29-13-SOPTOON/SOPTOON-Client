import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import noticeIcon from "../../assets/icons/ic_notice_bubble.svg";
import line from "../../assets/icons/line.svg";
import StyledLine from "./StyledLine";
import Screen from "../../styles/Screen";

const CommonNav = () => {
  const homeButton = useRef();
  const webtoonButton = useRef();
  const bestButton = useRef();
  const challengeButton = useRef();
  const myPageButton = useRef();

  const [clicked, setClicked] = useState(homeButton);

  useEffect(() => {
    homeButton.current.style = "background:#60d171; color:white;";
  }, []);

  const handleClick = (refButton) => {
    clicked.current.style = "background:white; color:black;";
    refButton.current.style = "background:#60d171; color:white;";
    setClicked(refButton);
  };

  return (
    <>
      <StyledRoot>
        <StyledLeft>
          <button ref={homeButton} onClick={() => handleClick(homeButton)}>
            홈
          </button>
          <button ref={webtoonButton} onClick={() => handleClick(webtoonButton)}>
            웹툰
          </button>
          <button ref={bestButton} onClick={() => handleClick(bestButton)}>
            베스트 도전
          </button>
          <button ref={challengeButton} onClick={() => handleClick(challengeButton)}>
            도전만화
          </button>
          <Screen desktop tablet>
            <button ref={myPageButton} onClick={() => handleClick(myPageButton)}>
              마이페이지
            </button>
            <img src={line} alt="line" />
            <p>단행본 만화</p>
            <p>장르소설</p>
          </Screen>
        </StyledLeft>
        <Screen desktop tablet>
          <StyledRight>
            <img className="notice-icon" src={noticeIcon} alt="notice" />
            <p>수호신을 가진 남자 &lt;수호하는 너에게&gt;</p>
          </StyledRight>
        </Screen>
      </StyledRoot>
      <StyledLine />
    </>
  );
};

const StyledRoot = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: var(--screen-width);
  height: 37px;
  margin: 0 auto;
`;

const StyledLeft = styled.div`
  display: flex;
  align-items: center;
  button {
    height: 37px;
    border: none;
    width: max-content;
    padding: 10px 13px;
    font-weight: bold;
    font-size: 14px;
    letter-spacing: -1.8px;
    background-color: white;
  }
  p {
    height: 37px;
    width: max-content;
    padding: 10px 6px;
    font-weight: 500;
    font-size: 14px;
    letter-spacing: -8%;
    color: #737373;
  }
  .clicked {
    background-color: #60d171;
    color: white;
  }
`;

const StyledRight = styled.div`
  display: flex;
  align-items: center;
  img {
    margin-right: 8px;
  }
  p {
    color: #737373;
    font-size: 11px;
    margin-right: 16px;
  }
`;

export default CommonNav;
