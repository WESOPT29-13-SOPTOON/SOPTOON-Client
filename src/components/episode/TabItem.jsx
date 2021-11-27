import React from "react";
import styled, { css } from "styled-components";

const TabItem = ({ value, isSelected, color, onClick }) => {
  return (
    <div>
      <StyledItemBtn isSelected={isSelected} color={color} onClick={onClick}>
        {value}
      </StyledItemBtn>
    </div>
  );
};

const StyledItemBtn = styled.div`
  position: relative;
  border: 0;
  padding: 0;
  cursor: pointer;
  ${({ isSelected, color }) =>
    isSelected &&
    css`
      && {
        color: ${color};
        font-weight: bold;
      }
    `};
`;

export default TabItem;
