import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Episode from "../pages/Episode";
import Home from "../pages/Home";
import MainHeader from "../components/common/MainHeader";
import CommonNav from "../components/common/CommonNav";

const MainRouter = () => {
  return (
    <BrowserRouter>
      <MainHeader />
      <CommonNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/episode" element={<Episode />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MainRouter;
