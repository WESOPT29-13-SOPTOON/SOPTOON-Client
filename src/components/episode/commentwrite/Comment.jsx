import React, { useState } from "react";
import styled from "styled-components";
import SideButton from "./SideButton";
import plusIcon from "../../../assets/icons/ic_plus.svg";

const Comment = ({ handleSubmit }) => {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  const handleInput = (e) => {
    const text = e.target.value;
    if (text.length <= 500) {
      setInput(text);
      setCount(text.length);
    }
  };

  return (
    <StyledRoot>
      <p className="title">의견 쓰기</p>
      <StyledBottom count={count === 0 ? false : true}>
        <div className="input-box">
          <form onSubmit={(e) => handleSubmit(e, input)}>
            <div className="input-top">
              <p className="writer">솝트</p>
              <textarea
                value={input}
                onChange={handleInput}
                placeholder="주제와 무관한 댓글이나 스포일러, 악플은 경고조치 없이 삭제되며 징계 대상이 될 수 있습니다."
              />
              <p className="count">{count} /500</p>
            </div>
            <div className="input-bottom">
              <button type="submit" className="register-button">
                등록
              </button>
            </div>
          </form>
        </div>
        <div className="button-wrap">
          <SideButton icon={plusIcon} text="관심웹툰" />
          <SideButton text="첫회보기" />
          <SideButton text="목록보기" />
        </div>
      </StyledBottom>
    </StyledRoot>
  );
};

const StyledRoot = styled.div`
  width: var(--screen-width);
  height: 240px;
  padding: 0 20px;
  margin: 0 auto;
  .title {
    font-weight: bold;
    font-size: 20px;
    margin-bottom: 10px;
  }
`;

const StyledBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  .input-box {
    width: 664px;
    height: 204px;
    border: 1px solid #d2d2d2;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .input-top {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .writer {
    margin-top: 22px;
    margin-left: 16px;
    margin-bottom: 10px;
    font-weight: bold;
    font-size: 12.5px;
  }
  textarea {
    font-weight: 400;
    font-size: 12.5px;
    width: 632px;
    height: 72px;
    border: none;
    resize: none;
    overflow: hidden;
    margin: 0 auto;
    &::placeholder {
      color: #d2d2d2;
    }
    &:focus {
      outline: none;
    }
  }
  .count {
    margin: 15px 17px;
    text-align: right;
  }
  .input-bottom {
    height: 44px;
    width: 663px;
    border-top: 1px solid #d2d2d2;
    display: flex;
    justify-content: end;
  }
  .register-button {
    width: 75px;
    height: inherit;
    margin-right: 1px;
    margin-bottom: 1px;
    border-bottom-right-radius: 12px;
    border: none;
    background-color: ${(props) => (props.count ? "#60d171" : "#F9F9FC")};
    color: ${(props) => (props.count ? "white" : "#727272")};
    font-size: 15px;
    font-weight: bold;
  }
`;

export default Comment;
