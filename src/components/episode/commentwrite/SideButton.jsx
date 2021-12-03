import React from "react";
import styled from "styled-components";

const SideButton = ({ icon, text }) => {
  return (
    <StyledButton clicked={icon ? true : false}>
      {icon && <img src={icon} alt="icon" />}
      {text}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  width: 128px;
  height: 50px;
  border-radius: 12px;
  margin: 12px 31px;
  background-color: ${(props) => (props.clicked ? "#60d171" : "#F9F9FC")};
  font-weight: 600;
  font-size: 16px;
  color: ${(props) => (props.clicked ? "white" : "#737373")};
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  img {
    margin-right: 4px;
  }
`;

export default SideButton;
