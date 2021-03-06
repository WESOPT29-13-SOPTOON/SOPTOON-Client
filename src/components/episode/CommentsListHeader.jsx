import React from "react";
import styled from "styled-components";
import { applyMediaQuery } from "../../styles/mediaQuery";
import cleanBot from "../../assets/images/img_cleanbot.png";
import check from "../../assets/icons/ic_check.png";

const CommentsListHeader = ({ setView }) => {
  return (
    <StyledRoot>
      <StyledWrapper>
        <StyledBtnWrapper>
          <button onClick={() => setView("bestComment")}>
            <img src={check} alt="" />
            BEST댓글
          </button>
          <button onClick={() => setView("comment")}>전체댓글</button>
        </StyledBtnWrapper>
        <StyledBox>
          <div>
            <img src={cleanBot} alt="클린봇" />
            <span>
              <strong>클린봇</strong>이 악성댓글을 감지합니다.
            </span>
          </div>
          <div>설정</div>
        </StyledBox>
      </StyledWrapper>
    </StyledRoot>
  );
};

export default CommentsListHeader;

const StyledRoot = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledWrapper = styled.div`
  ${applyMediaQuery("desktop")} {
    width: var(--screen-width);
    padding-right: 19.8rem;
  }
  ${applyMediaQuery("tablet")} {
    width: var(--screen-width);
  }
  ${applyMediaQuery("mobile")} {
    width: var(--screen-width);
  }
`;

const StyledBtnWrapper = styled.div`
  font-size: 1.25rem;

  button {
    border: none;
    background-color: white;
    margin-top: 3.8rem;
    font-weight: bold;
  }

  button:nth-child(1) {
    color: #60d171;
    margin-right: 3.2rem;
    & > img {
      margin-right: 0.6rem;
      vertical-align: middle;
    }
  }

  button:nth-child(2) {
    color: #d2d2d2;
  }
`;

const StyledBox = styled.div`
  border: 0.1rem solid #d2d2d2;
  font-size: 1.25rem;
  border-radius: 1rem;
  margin-top: 1.7rem;
  margin-bottom: 2.4rem;
  color: #d2d2d2;
  height: 4rem;
  display: flex;
  justify-content: space-between;

  div:nth-child(1) {
    display: flex;
    align-items: center;

    & > img {
      margin-left: 1rem;
      margin-right: 0.5rem;
    }

    & > span {
      strong {
        color: #60d171;
      }
    }
  }

  div:nth-child(2) {
    display: flex;
    align-items: center;
    margin-right: 1.8rem;
  }
`;
