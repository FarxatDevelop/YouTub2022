import React from "react";
import Videos from "../layout/videos/Videos";
import { Routes, Route } from "react-router-dom";
import FullVideo from "../layout/videos/FullVideo";
import Navbar from "../layout/navbar/Navbar";
import "./pages.css";
import Aside from "../layout/Aside/Aside";

function Pages() {
  return (
    <div className="pages">
      <Navbar />
      <main className="main">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Aside />
                <Videos />
              </>
            }
          />
          <Route path="/video/:id" element={<FullVideo />} />
        </Routes>
      </main>
    </div>
  );
}

export default Pages;
