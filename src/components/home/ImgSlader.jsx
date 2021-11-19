import React from "react";
import styled from "styled-components";
import today1 from "../../assets/images/img_today1.png";
import today2 from "../../assets/images/img_today2.png";
import today3 from "../../assets/images/img_today3.png";

const ImgSlader = () => {
  return (
    <StyledRoot>
      <div>11월 10일 수요일</div>
      <img src={today1} />
      <img src={today2} />
      <img src={today3} />
      <button>왼쪽 화살표</button>
      <button>오른쪽 화살표</button>
      {/*이미지 및 동그란 버튼*/}
      <button></button>
      <button></button>
      <button></button>
    </StyledRoot>
  );
};

export default ImgSlader;

const StyledRoot = styled.div`
  border: 0.2rem solid #e5e5e5;
  width: 69.169rem;
  height: 33.2rem;

  & > img {
    width: 30.6rem;
    height: 16.8rem;
    border-radius: 0.6rem;
  }
`;
