import React from "react";
import styled from "styled-components";
import bestIcon from "../../assets/icons/ic_bestcomment.png";

const BestComment = () => {
  return (
    <StyledRoot>
      <StyledHeader>
        <span>
          <img src={bestIcon} alt="" />
          유진(haneugene)
        </span>
        <span>2021-10-18</span>
      </StyledHeader>
      <StyledContent>
        <p>하루 종일 너란 바닷속을 항해하는 나는 아쿠아맨 헤엄 헤엄 헤엄</p>
        <p>I&apos;m rolling in the deep inside of you</p>
        <p>너의 어장은 너무 캄캄해</p>
      </StyledContent>
      <StyledFooter>
        답글
        <button>좋아요 113</button>
        <button>싫어요</button>
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
  width: 69.8rem;
`;

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  & > span {
    font-size: 1.2rem;
    color: #737373;
  }
  & > span:nth-child(1) {
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
  & > p {
    font-size: 1.25rem;
    line-height: 1.9rem;
  }
`;

const StyledFooter = styled.div`
  color: #737373;
  font-size: 1.1rem;
  & > button {
    border-radius: 1.65rem;
    border: 0.1rem solid #e5e5e5;
    background-color: white;
    margin-left: 1.6rem;
    font-weight: bold;
    color: #737373;
    font-size: 1.1rem;
  }

  & > button:nth-child(1) {
    width: 7.9em;
    height: 3.1rem;
  }

  & > button:nth-child(2) {
    width: 5.6rem;
    height: 3.1rem;
  }
`;
