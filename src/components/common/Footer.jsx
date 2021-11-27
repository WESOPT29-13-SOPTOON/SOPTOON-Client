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
    <StyledFooter>
      <Line />
      <div>
        <FooterBase list={initLeftFooterData()} />
        <span></span>
        <FooterBase list={initRightFooterData()} />
      </div>
      <small>
        본 콘텐츠의 저작권은 저자 또는 제공처에 있으며, 이를 무단 이용하는 경우 저작권법 등에 따라 법적 책임을 질 수
        있습니다.
      </small>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 3.7rem;
  border-top: 0.1rem solid #d2d2d2;
  & > * {
    width: var(--screen-width);
  }
  & > div {
    display: flex;
    & > span {
      width: 0.1rem;
      height: 3.5rem;
      background-color: #d2d2d2;
    }
    //내일 중앙선 물어보기 의도가 뭔지 양쪽으로 같은 거리로 배치할 것인지 아니면 화면 그대로 다른 거리로 배치할 것인지
  }

  & > small {
    font-size: 1.1.rem;
    color: black;
    margin-top: 3rem;
    margin-bottom: 7.5rem;
    padding: 0 0.8rem;
  }
`;

const Line = styled.div``;

export default Footer;
