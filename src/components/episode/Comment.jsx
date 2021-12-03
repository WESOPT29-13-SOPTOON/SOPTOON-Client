import React, { useState } from "react";
import styled from "styled-components";
import bestIcon from "../../assets/icons/ic_bestcomment.png";

const Comment = ({ comment, view }) => {
  const { name, id, date, content } = comment;

  const [Commentlikes, setCommentLikes] = useState(113);
  const [isCommentLikeClicked, setIsCommentLikeClicked] = useState(false);
  const [isCommentDislikeClicked, setIsCommentDislikeClicked] = useState(false);

  const onCommentLikeClick = () => {
    if (isCommentLikeClicked === false) {
      // 좋아요 눌렸을 때
      setIsCommentLikeClicked(true);
      setCommentLikes(Commentlikes + 1);
      setIsCommentDislikeClicked(false);
    } else {
      setIsCommentLikeClicked(false);
      setCommentLikes(Commentlikes - 1);
    }
  };

  const onCommentDislikeClick = () => {
    if (isCommentDislikeClicked === false) {
      //싫어요 눌렸을 때
      setIsCommentDislikeClicked(true);
      setIsCommentLikeClicked(false);
      if (isCommentLikeClicked === true) {
        //좋아요가 눌려져있으면 갯수 하나 빼주기
        setCommentLikes(Commentlikes - 1);
      }
    } else {
      setIsCommentDislikeClicked(false);
    }
  };

  const [BestCommentlikes, setBestCommentLikes] = useState(421);
  const [isBestCommentLikeClicked, setIsBestCommentLikeClicked] = useState(false);
  const [isBestCommentDislikeClicked, setIsBestCommentDislikeClicked] = useState(false);

  const onBestCommentLikeClick = () => {
    if (isBestCommentLikeClicked === false) {
      // 좋아요 눌렸을 때
      setIsBestCommentLikeClicked(true);
      setBestCommentLikes(BestCommentlikes + 1);
      setIsBestCommentDislikeClicked(false);
    } else {
      setIsBestCommentLikeClicked(false);
      setBestCommentLikes(BestCommentlikes - 1);
    }
  };

  const onBestCommentDislikeClick = () => {
    if (isBestCommentDislikeClicked === false) {
      //싫어요 눌렸을 때
      setIsBestCommentDislikeClicked(true);
      setIsBestCommentLikeClicked(false);
      if (isBestCommentLikeClicked === true) {
        //좋아요가 눌려져있으면 갯수 하나 빼주기
        setBestCommentLikes(BestCommentlikes - 1);
      }
    } else {
      setIsBestCommentDislikeClicked(false);
    }
  };

  // 댓글 받았을 때 get해서 출력하고 전체댓글 보이게 하기
  return (
    <StyledRoot>
      <StyledWrapper>
        <StyledHeader>
          <span>
            <img src={bestIcon} alt="bestIcon" className={view} />
            {name}({id})
          </span>
          <span>{date}</span>
        </StyledHeader>
        <StyledContent>{content}</StyledContent>
        <StyledFooter>
          <div>답글</div>
          <div>
            <StyledBtn
              onClick={view === "comment" ? onCommentLikeClick : onBestCommentLikeClick}
              onClicked={view === "comment" ? isCommentLikeClicked : isBestCommentLikeClicked}>
              좋아요 {view === "comment" ? Commentlikes : BestCommentlikes}
            </StyledBtn>
            <StyledBtn
              onClick={view === "comment" ? onCommentDislikeClick : onBestCommentDislikeClick}
              onClicked={view === "comment" ? isCommentDislikeClicked : isBestCommentDislikeClicked}>
              싫어요
            </StyledBtn>
          </div>
        </StyledFooter>
      </StyledWrapper>
    </StyledRoot>
  );
};

export default Comment;

const StyledRoot = styled.div``;

const StyledWrapper = styled.div`
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
  height: 2.4rem;

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
      padding-right: 0.78rem;
    }

    & > img.comment {
      display: none;
      padding-right: 0;
    }
  }
`;

const StyledContent = styled.section`
  margin-top: 2rem;
  margin-bottom: 0.8rem;
  font-size: 1.25rem;
  line-height: 1.9rem;
`;

const StyledFooter = styled.div`
  color: #737373;
  font-size: 1.1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

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
      margin-left: 1.6rem;
      font-weight: bold;
      color: #737373;
      font-size: 1.1rem;
      height: 3.1rem;
    }
  }
`;

const StyledBtn = styled.button`
  background-color: ${({ onClicked }) => (onClicked ? "#e5e5e5" : "white")};
`;
