import React from "react";
import styled from "styled-components";
import FooterBase from "./FooterBase";

const initLeftFooterData = () => {
  return [
    { content: "이용약관" },
    { content: "개인정보처리방침", isBold: true },
    { content: "책임의 한계와 법적고지" },
    { content: "고객센터" },
    { content: "웹툰 광고 문의" },
  ];
};
const initRightFooterData = () => {
  return [
    { content: "이용약관" },
    { content: "개인정보처리방침", isBold: true },
    { content: "청소년보호정책" },
    { content: "웹툰 고객센터" },
    { content: "웹툰 사업 문의" },
  ];
};

const Footer = () => {
  return (
    <StyledRoot>
      <Line />
      {/* <Screen desktop tablet> */}
      <StyledBaseWrapper>
        <FooterBase list={initLeftFooterData()} />
        <span></span>
        <FooterBase list={initRightFooterData()} />
      </StyledBaseWrapper>
      {/* </Screen> */}
      {/* <Screen mobile>
      <FooterBase list={initLeftFooterData()} />
      <FooterBase list={initRightFooterData()} />
      </Screen> */}
      <small>
        본 콘텐츠의 저작권은 저자 또는 제공처에 있으며, 이를 무단 이용하는 경우 저작권법 등에 따라 법적 책임을 질 수
        있습니다.
      </small>
    </StyledRoot>
  );
};

// @media ${({ theme }) => theme.device.tablet 사이? mobile} {
//   margin: 0 4.4rem;
// }
const StyledRoot = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > * {
    width: var(--screen-width);
  }

  & > small {
    font-size: 1.1.rem;
    color: black;
    margin-top: 3rem;
    margin-bottom: 7.5rem;
    padding: 0 0.8rem;
  }
`;

const StyledBaseWrapper = styled.div`
  display: flex;
  padding-top: 3.7rem;
  & > span {
    position: absolute;
    left: 50%;
    width: 0.1rem;
    height: 3.5rem;
    background-color: #d2d2d2;
  }
`;
//span 태그
// @media ${({ theme }) => theme.device.mobile} {
//   display: none;
// }

const Line = styled.div`
  width: 100%;
  height: 0.1rem;
  background-color: #d2d2d2;
`;

export default Footer;
