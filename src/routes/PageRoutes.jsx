import React from "react";

import "./pageRoutes.scss";

import { Routes, Route } from "react-router-dom";

import MainPage from "../Pages/MainPage/MainPage";
import Content from "../components/Content/Content";
import BoxesPage from "../Pages/BoxesPage/BoxesPage";
import MakeupPage from "../Pages/MakeupPage/MakeupPage";
import NewsPage from "../Pages/NewsPage/NewsPage";
import WatchesPage from "../Pages/WatchesPage/WatchesPage";
import SilverJewelryPage from "../Pages/SilverJewelryPage/SilverJewelryPage";
import PeafumesPage from "../Pages/PeafumesPage/PeafumesPage";
import OtherProductPage from "../Pages/OtherProductPage/OtherProductPage";
import AboutUsPage from "../Pages/AboutUsPage/AboutUsPage";
import Admin from "../components/Admin/Admin";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

function PageRoutes() {
  return (
    <div className="pageRoutes">
      <Routes>
        <Route path="/" element={<MainPage />}>
          <Route path="/" element={<Content />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/watches" element={<WatchesPage />} />
          <Route path="/boxes" element={<BoxesPage />} />
          <Route path="/makeup" element={<MakeupPage />} />
          <Route path="/silver-jewelry" element={<SilverJewelryPage />} />
          <Route path="/perfumes" element={<PeafumesPage />} />
          <Route path="/others" element={<OtherProductPage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
        </Route>
        <Route path="/admin" element={<Admin />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default PageRoutes;
