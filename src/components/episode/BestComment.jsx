import React from "react";
import styled from "styled-components";
import bestIcon from "../../assets/icons/ic_bestcomment.png";

const BestComment = ({ comment }) => {
  const { name, id, date, content } = comment;
  //구조 분해 할당

  return (
    <StyledRoot>
      <StyledHeader>
        <span>
          <img src={bestIcon} alt="bestIcon" />
          {name}({id})
        </span>
        <span>{date}</span>
      </StyledHeader>
      <StyledContent>{content}</StyledContent>
      <StyledFooter>
        <div>답글</div>
        <div>
          <button>좋아요 113</button>
          <button>싫어요</button>
        </div>
      </StyledFooter>
    </StyledRoot>
  );
};

export default BestComment;

const StyledRoot = styled.div`
  border-bottom: 0.1rem solid #e5e5e5;
  margin-bottom: 2.4rem;
  padding-bottom: 2.4rem;
  padding-left: 2.1rem;
  padding-right: 2.4rem;
`;

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    font-size: 1.2rem;
    color: #737373;
    display: flex;
    align-items: center;
  }

  span:nth-child(1) {
    font-weight: bold;
    color: black;

    & > img {
      margin-right: 0.789rem;
    }
  }
`;

const StyledContent = styled.section`
  margin-top: 2rem;
  margin-bottom: 0.8rem;
  font-size: 1.25rem;
  line-height: 1.9rem;
  /* 
  & > p {
    font-size: 1.25rem;
    line-height: 1.9rem;
  } */
`;

const StyledFooter = styled.div`
  color: #737373;
  font-size: 1.1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  //답글 세로 중앙 정렬

  div:nth-child(1) {
    &:hover {
      color: black;
      cursor: pointer;
    }
  }

  div:nth-child(2) {
    & > button {
      border-radius: 1.65rem;
      border: 0.1rem solid #e5e5e5;
      background-color: white;
      margin-left: 1.6rem;
      font-weight: bold;
      color: #737373;
      font-size: 1.1rem;
      height: 3.1rem;
    }
    // 버튼 클릭했을 때 색 바뀌게
    & > button:nth-child(1) {
      height: 3.1rem;
    }

    & > button:nth-child(2) {
      height: 3.1rem;
    }
  }
`;
