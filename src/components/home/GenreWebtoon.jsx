import React from "react";
import styled from "styled-components";
import downIcon from "../../assets/icons/ic_down_black.svg";
import Button from "./genre/Button";
import Tag from "./genre/Tag";
import Card from "./genre/Card";
import webtoonList from "./genre/webtoonList";

const GenreWebtoon = () => {
  const tagList = ["일상", "개그", "판타지", "액션", "드라마", "순정", "감성", "스릴러", "시대극", "스포츠"];

  return (
    <StyledRoot>
      <StyledTitle>
        <p>
          장르별 <span>추천웹툰</span>
        </p>
        <div>
          <p>업데이트순</p>
          <img src={downIcon} alt="down" />
        </div>
      </StyledTitle>
      <StyledBody>
        <StyledLeft>
          <div className="buttons">
            <Button text="전체보기" />
            <Button text="에피소드" />
            <Button text="옴니버스" />
            <Button text="스토리" />
          </div>
          <div className="tags">
            {tagList.map((tag, index) => (
              <Tag key={index} text={tag} />
            ))}
          </div>
        </StyledLeft>
        <StyledRight>
          <div className="webtoons">
            {webtoonList.map((webtoon, index) => (
              <Card key={index} webtoon={webtoon} />
            ))}
          </div>
        </StyledRight>
      </StyledBody>
    </StyledRoot>
  );
};

const StyledRoot = styled.div`
  width: var(--screen-width);
  margin-top: 15px;
  margin-bottom: 46px;
`;

const StyledTitle = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-between;
  p {
    font-size: 22px;
    font-weight: 600;
    & > span {
      color: #60d171;
    }
  }
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    & > p {
      color: #60d171;
      font-size: 12px;
      font-weight: bold;
      margin-right: 5px;
    }
    & > img {
      width: 6px;
    }
  }
`;

const StyledBody = styled.div`
  width: var(--screen-width);
  border: 1px solid #e5e5e5;
  background-color: #f9f9fc;
  border-radius: 12px;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  .tags {
    height: 281px;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    flex-wrap: wrap;
    margin-left: -52px;
  }
`;

const StyledRight = styled.div`
  .webtoons {
    display: grid;
    grid-template-columns: repeat(4, minmax(20%, auto));
    grid-column-gap: 10px;
    grid-row-gap: 10px;
  }
`;

export default GenreWebtoon;
