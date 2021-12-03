import React from "react";
import styled from "styled-components";
import { applyMediaQuery } from "../../../styles/mediaQuery";

const Button = ({ text }) => {
  return <StyledButton text={text === "전체보기" ? true : false}>{text}</StyledButton>;
};

const StyledButton = styled.button`
  width: 80px;
  height: 32px;
  background-color: ${(props) => (props.text ? "#60d171" : "white")};
  color: ${(props) => (props.text ? "white" : "#737373")};
  border: none;
  border-radius: 8px;
  font-weight: bold;
  font-size: 12px;
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;

  ${applyMediaQuery("tablet")} {
    width: 63px;
    height: 25px;
    margin: 7px;
  }
  ${applyMediaQuery("mobile")} {
    margin: 4px;
  }
`;

export default Button;
