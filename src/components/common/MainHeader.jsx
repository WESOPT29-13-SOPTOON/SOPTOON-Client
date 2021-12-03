import React from "react";
import styled from "styled-components";
import naverLogoIcon from "../../assets/icons/logo_naver.svg";
import profileIcon from "../../assets/icons/ic_profile.svg";
import noticeIcon from "../../assets/icons/ic_notice_bell.svg";
import menuIcon from "../../assets/icons/ic_menu.svg";
import mailIcon from "../../assets/icons/ic_mail.svg";
import downIcon from "../../assets/icons/ic_down_gray.svg";
import searchIcon from "../../assets/icons/ic_search.svg";
import line from "../../assets/icons/line.svg";
import StyledLine from "./StyledLine";

const MainHeader = () => {
  return (
    <>
      <StyledRoot>
        <StyledLeft>
          <img className="naver-logo-icon" src={naverLogoIcon} alt="logo" />
          <p className="webtoon">만화</p>
          <img className="line" src={line} alt="line" />
          <p className="webnovel">웹소설</p>
          <div className="input-box">
            <input type="text" placeholder="제목/작가로 검색할 수 있습니다." />
            <img className="search-icon" src={searchIcon} alt="search" />
          </div>
        </StyledLeft>
        <StyledRight>
          <img className="profile-icon" src={profileIcon} alt="profile" />
          <div className="profile">
            <p>솝트</p>
            <img src={downIcon} alt="down" />
          </div>
          <img className="notice-icon" src={noticeIcon} alt="notice" />
          <img className="mail-icon" src={mailIcon} alt="mail" />
          <img className="menu-icon" src={menuIcon} alt="menu" />
        </StyledRight>
      </StyledRoot>
      <StyledLine />
    </>
  );
};

const StyledRoot = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: var(--screen-width);
  height: 49px;
  margin: 0 auto;
`;

const StyledLeft = styled.div`
  display: flex;
  align-items: center;
  .naver-logo-icon {
    margin-left: 20px;
    width: 48px;
  }
  .line {
    margin: 9px;
    height: 12px;
  }
  .webtoon {
    margin-left: 4px;
    font-weight: bold;
    font-size: 21.3px;
  }
  .webnovel {
    font-weight: bold;
    font-size: 14px;
    color: #737373;
  }
  .input-box {
    width: 282px;
    height: 33px;
    border: 1px solid #e5e5e5;
    margin-left: 26px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  input {
    margin: 9px;
    border: none;
    font-size: 10.6px;
    width: 160px;
    &::placeholder {
      color: #737373;
    }
    &:focus {
      outline: none;
    }
  }
`;

const StyledRight = styled.div`
  display: flex;
  align-items: center;
  .profile {
    margin: 6px;
    font-size: 10px;
    color: #737373;
    display: flex;
    align-items: center;
    justify-content: center;
    & > img {
      margin: 2px;
    }
  }
  .notice-icon,
  .mail-icon,
  .menu-icon {
    margin-right: 2px;
    width: 44px;
  }
`;

export default MainHeader;
