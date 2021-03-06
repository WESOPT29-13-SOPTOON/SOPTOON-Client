import React from "react";
import styled from "styled-components";
import newWebtoon from "../../assets/images/img_new.png";
import uploadIcon from "../../assets/icons/ic_upload.png";
import viewMoreIcon from "../../assets/icons/ic_viewmore.svg";

const TodayWebtoonRight = () => {
  return (
    <div>
      <StyledRight>
        <StyledNewComic>
          <div>
            <strong>새로운</strong>
            <p>베스트 도전만화</p>
          </div>
          <img src={newWebtoon} alt="새로운 베스트 도전만화" />
          <div>
            <p>이게좋아</p>
            <p>lobyeol</p>
          </div>
        </StyledNewComic>
        <StyledBtn>
          <button>
            웹툰 올리기 <img src={uploadIcon} />
          </button>
          <button>
            고객센터 <img src={viewMoreIcon} />
          </button>
          <button>
            공지사항 <img src={viewMoreIcon} />
          </button>
        </StyledBtn>
      </StyledRight>
    </div>
  );
};

export default TodayWebtoonRight;

const StyledRight = styled.div`
  margin-left: 2.116rem;
  margin-top: 26px;
`;

const StyledNewComic = styled.div`
  border-radius: 0.5rem;
  border: 0.1rem solid #e5e5e5;
  background-color: #f9f9fc;
  width: 18.3rem;
  height: 20.371rem;
  margin-bottom: 1.613rem;
  padding-left: 1.3rem;
  padding-top: 1.3rem;
  padding-bottom: 1.471rem;

  & > div:nth-child(1) {
    font-weight: bold;
    font-size: 1.5rem;
    margin-bottom: 0.985rem;
    strong {
      color: #60d171;
    }
  }

  & > img {
    width: 15.828rem;
    height: 8.6rem;
  }

  & > div:nth-child(3) {
    font-weight: bold;
    p:nth-child(1) {
      font-size: 1.4rem;
      margin-top: 1.115rem;
      margin-bottom: 0.6rem;
    }

    p:nth-child(2) {
      font-size: 1rem;
      color: #737373;
    }
  }
`;

const StyledBtn = styled.div`
  display: flex;
  flex-direction: column;

  & > button {
    border: 0.1rem solid #e5e5e5;
    background-color: #f9f9fc;
    width: 18.273rem;
    height: 3.2rem;
    border-radius: 0.6rem;
    font-size: 1.4rem;
    flex-direction: row;
    letter-spacing: -0.2rem;
    font-weight: bold;
    img {
      margin-left: 1rem;
    }
  }

  & > button:nth-child(1) {
    color: white;
    background-color: #60d171;
    border: none;
    font-weight: normal;
  }

  & > button:nth-child(2) {
    margin-top: 0.8rem;
    margin-bottom: 0.8rem;
  }
`;
