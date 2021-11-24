import React from "react";
import styled from "styled-components";
import BestComment from "./BestComment";
import cleanBot from "../../assets/images/img_cleanbot.png";
import check from "../../assets/icons/ic_check.png";

const CommentsList = () => {
  return (
    <StyledRoot>
      <StyledBtnWrapper>
        <button>
          <img src={check} alt="체크" />
          BEST댓글
        </button>
        <button>전체댓글</button>
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
      <BestComment />
    </StyledRoot>
  );
};

export default CommentsList;

const StyledRoot = styled.div``;

const StyledBtnWrapper = styled.div`
  font-size: 1.25rem;

  & > button {
    border: none;
    background-color: white;
    margin-top: 3.8rem;
  }

  & > button:nth-child(1) {
    color: #60d171;
    margin-right: 3.2rem;

    img {
      margin-right: 0.6rem;
    }
  }

  & > button:nth-child(2) {
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
  width: 66.4rem;
  height: 4rem;
  display: flex;
  justify-content: space-between;

  & > div:nth-child(1) {
    line-height: 2rem;

    span {
      strong {
        color: #60d171;
      }
    }
  }

  & > div:nth-child(2) {
    padding-top: 1.4rem;
    margin-right: 1.8rem;
  }
`;
