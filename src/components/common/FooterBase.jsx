import React from "react";
import styled, { css } from "styled-components";

const FooterBase = ({ list }) => {
  return (
    <StyledFooterBase>
      {list.map((item, idx) => (
        <StyledList key={idx} isBold={item.isBold}>
          {item.content}
        </StyledList>
      ))}
    </StyledFooterBase>
  );
};

const StyledFooterBase = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const StyledList = styled.li`
  height: 1rem;
  padding: 0 0.8rem;
  margin-bottom: 0.8rem;
  border-right: 0.1rem solid #d2d2d2;
  ${({ isBold }) =>
    isBold &&
    css`
      font-weight: bold;
    `};
  &:last-child {
    border: 0;
  }
`;

export default FooterBase;
