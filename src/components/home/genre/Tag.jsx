import React from "react";
import styled from "styled-components";

const Tag = ({ text }) => {
  return <StyledButton text={text === "일상" ? true : false}>{`#${text}`}</StyledButton>;
};

const StyledButton = styled.button`
  width: max-content;
  height: 20px;
  border-radius: 10px;
  border: none;
  background-color: ${(props) => (props.text ? "#60d171" : "#E8E8E8")};
  color: ${(props) => (props.text ? "white" : "#737373")};
  font-size: 10px;
  font-weight: bold;
  margin: 5px 3px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Tag;
