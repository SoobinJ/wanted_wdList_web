import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NoMatchPage from "../pages/noMatch";
import WdList from "../pages/wdlist/wdlist";

export default function RootRoute() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WdList />} key="wdlist"></Route>

        {/* 경로가 유효하지 않을 때 */}
        <Route path="*" element={<NoMatchPage />} key="noMatch" />
      </Routes>
    </BrowserRouter>
  );
}
