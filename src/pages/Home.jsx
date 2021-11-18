import React from "react";
import styled from "styled-components";
import Footer from "../components/common/Footer";

const Home = () => {
  return (
    <StyledHome>
      <Footer />
    </StyledHome>
  );
};

const StyledHome = styled.main`
  display: flex;
  justify-content: center;
`;

export default Home;
