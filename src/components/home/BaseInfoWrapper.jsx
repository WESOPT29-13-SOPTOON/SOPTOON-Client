import React from "react";
import Img from "../../assets/images/img_challenge_episode1@3x.png";

const BaseInfoWrapper = ({ children }) => {
  return (
    <article>
      <img src={Img} alt="" />
      {children}
    </article>
  );
};

export default BaseInfoWrapper;
