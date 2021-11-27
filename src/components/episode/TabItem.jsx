import React from "react";
import styled, { css } from "styled-components";

const TabItem = ({ value, isSelected, color, onClick }) => {
  return (
    <div>
      <StyledBack isSelected={isSelected}></StyledBack>
      <StyledItemBtn isSelected={isSelected} color={color} onClick={onClick}>
        {value}
      </StyledItemBtn>
    </div>
  );
};

const StyledItemBtn = styled.button`
  position: relative;
  border: 0;
  padding: 0;
  ${({ isSelected, color }) =>
    isSelected &&
    css`
      && {
        color: ${color};
        font-weight: bold;
        background-color: #ffffff;
      }
    `};
`;

const StyledBack = styled.span`
  position: absolute;
  margin-left: 0.3rem;
  ${({ isSelected }) =>
    isSelected &&
    css`
      && {
        width: 4.2rem;
        height: 1.6rem;
        border-radius: 0.5rem;
        background-color: #ffffff;
        transform: scale(2, 2);
      }
    `};
`;

export default TabItem;
